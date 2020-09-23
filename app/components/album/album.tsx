import React, { useState, memo, useRef, useEffect } from 'react';
import CameraRoll, {
  PhotoIdentifier,
} from '@react-native-community/cameraroll';
import { Image } from '../image/image';
import { Taking } from './taking';
import { ImageStyle, TouchableOpacity, FlatList } from 'react-native';
import { AlbumProps } from './album.props';
import { Radio } from './radio';
import { Header } from './header';
import { requestPermissions, filterEmpty } from './helpers';
import { Footer } from './footer';
import { ITEM_SIZE, PAGE_SIZE } from './setting';

const ITEM: ImageStyle = {
  height: ITEM_SIZE,
  width: ITEM_SIZE,
};

type AlbumItemProps = {
  uri: string;
  onSelect: (uri: string) => void;
  selectedIndex?: number;
};

const AlbumItem: React.FC<AlbumItemProps> = memo((props) => {
  const { uri, onSelect, selectedIndex } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
      <Image resizeMode="cover" style={ITEM} source={{ uri }} />
      <Radio onPress={() => onSelect(uri)} selectedIndex={selectedIndex} />
    </TouchableOpacity>
  );
});

export const Album: React.FC<AlbumProps> = memo((props) => {
  const {
    initialSelected = [],
    onCancel,
    onOk,
    assetType = 'All',
    include = ['imageSize'],
  } = props;

  const [selected, setSelected] = useState(initialSelected);

  // const [albums, setAlbums] = useState<CameraRoll.Album[]>([])
  // source
  const [photoIdentifiers, setPhotoIdentifiers] = useState<PhotoIdentifier[]>(
    [],
  );
  const data = ['@take', ...photoIdentifiers];

  // status handle
  const status = useRef<{
    permissions: boolean;
    loading: boolean;
    after: string;
    next: boolean;
  }>({ permissions: false, after: undefined, loading: false, next: true });
  const footerRef = useRef<Footer>();

  const setLoading = (loading: boolean) => {
    status.current.loading = loading;
    footerRef.current && footerRef.current.setStates({ loading });
  };

  const setNext = (next: boolean) => {
    status.current.next = next;
    footerRef.current && footerRef.current.setStates({ next });
  };

  const checkPermissions = async () => {
    try {
      await requestPermissions();
      status.current.permissions = true;
    } catch (e) {
      status.current.permissions = false;
    }
  };

  const getPhotos = async () => {
    const { after } = status.current;
    const first = after ? PAGE_SIZE : PAGE_SIZE - 1;
    try {
      setLoading(true);
      const result = await CameraRoll.getPhotos({
        after,
        first,
        assetType,
        include,
      });
      status.current.after = result.page_info.end_cursor;
      const edges = filterEmpty(result.edges);
      setPhotoIdentifiers(after ? photoIdentifiers.concat(edges) : edges);
      footerRef.current.setStates({ empty: edges.length === 0 });
      setNext(result.page_info.has_next_page);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const getAlbums = async () => {
    try {
      const albums = await CameraRoll.getAlbums({ assetType });
      console.log(albums);
      // setAlbums(albums)
    } catch (e) {}
  };

  const handleSelect = (uri: string) => {
    const selectedClone = [...selected];
    const idx = selectedClone.indexOf(uri);
    if (idx === -1) {
      selectedClone.push(uri);
    } else {
      selectedClone.splice(idx, 1);
    }
    setSelected(selectedClone);
  };

  const handleOk = () => {
    onOk(selected);
  };

  const renderItem = ({ item }: { item: PhotoIdentifier | string }) => {
    if (typeof item === 'string') {
      return <Taking />;
    }
    const { uri } = item.node.image;
    const selectedIndex = selected.indexOf(uri);
    return (
      <AlbumItem
        uri={uri}
        onSelect={handleSelect}
        selectedIndex={selectedIndex}
      />
    );
  };

  useEffect(() => {
    checkPermissions().then(getPhotos);
  }, []);

  const onEndReached = () => {
    const { loading, next } = status.current;
    if (photoIdentifiers.length && next && !loading) {
      getPhotos();
    }
  };

  const keyExtractor = (item: PhotoIdentifier) =>
    typeof item === 'string' ? item : item.node.image.uri;

  const getItemLayout = (data, index: number) => ({
    length: ITEM_SIZE,
    offset: ITEM_SIZE * index,
    index,
  });

  return (
    <React.Fragment>
      <Header onOk={handleOk} onCancel={onCancel} />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        initialNumToRender={30}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
        }}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        onEndReachedThreshold={0.8}
        onEndReached={onEndReached}
        ListFooterComponent={<Footer ref={footerRef} />}
        removeClippedSubviews
      />
    </React.Fragment>
  );
});
