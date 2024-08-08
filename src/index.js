import _ from 'lodash';

const genDiff = (file1, file2) => {
  const result = [];
  const keys = _.union(_.keys(file1), _.keys(file2));

  keys.sort().forEach((key) => {
    if (!_.has(file1, key)) {
      result.push(`+ ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      result.push(`- ${key}: ${file1[key]}`);
    } else if (!_.isEqual(file1[key], file2[key])) {
      result.push(`- ${key}: ${file1[key]}`);
      result.push(`+ ${key}: ${file2[key]}`);
    } else {
      result.push(` ${key}: ${file1[key]}`);
    }
  });

  return `{ 
${result.join('\n')}
}`;
};

export default genDiff;
