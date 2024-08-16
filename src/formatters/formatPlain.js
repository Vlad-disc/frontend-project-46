import _ from 'lodash';

const checkValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getFromatPlain = (tree) => {
  const iter = (node, path) => {
    const lines = node.flatMap((item) => {
      const newPath = path ? `${path}.${item.key}` : item.key;
      switch (item.type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${checkValue(item.value)}`;
        case 'removed':
          return `Property '${newPath}' was removed`;
        case 'updated':
          return `Property '${newPath}' was updated. From ${checkValue(item.oldValue)} to ${checkValue(item.newValue)}`;
        case 'nested':
          return iter(item.children, newPath);
        default:
          return [];
      }
    });
    return lines.join('\n');
  };

  return iter(tree, '');
};

export default getFromatPlain;
