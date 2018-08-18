function pathFind(path, obj){
  if(path.length > 1){
    path = Array.from(path)
    let k = path.shift()
    return pathFind(path, Object.assign({}, obj[k]))
  } else {
    return path[0] in obj ? obj[path[0]] : undefined
  }
}


module.exports = {pathFind}