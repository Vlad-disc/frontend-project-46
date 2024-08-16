import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);
const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const keys = Object.entries(data);
  const strings = keys.map(([key, value]) => {
    const checkedValue = stringify(value, depth + 1);
    return `${indent(depth + 1)}  ${key}: ${checkedValue}`;
  });
  return `{\n${strings.join('\n')}\n  ${indent(depth)}}`;
};

const getFormatStylish = (tree) => {
  const iter = (node, depth) => {
    const lines = node.map((item) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = item;
      switch (type) {
        case 'added':
          return `${indent(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
        case 'removed':
          return `${indent(depth)}- ${key}: ${stringify(value, depth + 1)}`;
        case 'unchanged':
          return `${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`;
        case 'updated':
          return [
            `${indent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}`,
            `${indent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`,
          ].join('\n');
        case 'nested':
          return `${indent(depth)}  ${key}: ${iter(children, depth + 1)}`;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
    return [
      '{',
      ...lines,
      `${indent(depth - 1)}  }`,
    ].join('\n');
  };

  return iter(tree, 1);
};

export default getFormatStylish;
