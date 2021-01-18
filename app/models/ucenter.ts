import { Instance, types, flow } from 'mobx-state-tree';
import { withRootStore } from './extensions/with-root-store';

export const UcenterModel = types
  .model('ucenter')
  .props({
    loggedIn: types.optional(types.boolean, false),
  })
  .extend(withRootStore)
  .actions((self) => {
    const login = flow(function* () {
      try {
        self.loggedIn = true;
      } catch (e) {}
    });
    return {
      login,
    };
  });

export type Ucenter = Instance<typeof UcenterModel>;
