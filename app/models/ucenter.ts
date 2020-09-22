import {Instance, types, flow} from 'mobx-state-tree';

export const UcenterModel = types
  .model('ucenter')
  .props({
    loggedIn: types.optional(types.boolean, false),
  })
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
