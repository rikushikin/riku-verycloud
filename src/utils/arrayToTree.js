module.exports = (data, {label = 'name', value = 'id', parent = 'parent_id', labelProp = 'label', valueProp = 'value', childrenProp = 'children'} = {}) => {
  const [tree, hash] = [[], {}]
  for (let row of data) {
    if (row[parent] > 0) hash[row[parent]] = []
  }
  for (let row of data) {
    (row[parent] > 0 ? hash[row[parent]] : tree).push({_raw: row, [valueProp]: row[value], [labelProp]: row[label], [childrenProp]: hash[row[value]] || []})
  }
  return tree
}
