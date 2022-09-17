import { enableES5, produce } from 'immer';

export default (...args) => {
  enableES5(); // explore에서 immer동작시키기
  return produce(...args);
};
  