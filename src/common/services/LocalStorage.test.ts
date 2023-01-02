import { localStorageService } from './local-storage.service';
import { LocalStorageKeys } from './types';

test('data is added into local storage', () => {
  const data = { items: [{ id: 1, name: 'Hello' }] };
  localStorageService.setLocalStorageItem(LocalStorageKeys.cart, data);
  expect(localStorageService.getLocalStorageItem(LocalStorageKeys.cart)).toEqual(data);
});
