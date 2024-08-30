import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const diffTree = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    } if (!Object.hasOwn(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    } if (_.isEqual(data1[key], data2[key])) {
      return { type: 'unchanged', key, value: data1[key] };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, children: buildDiff(data1[key], data2[key]) };
    }
    return {
      type: 'updated', key, oldValue: data1[key], newValue: data2[key],
    };
  });

  return diffTree;
};

export default buildDiff;
