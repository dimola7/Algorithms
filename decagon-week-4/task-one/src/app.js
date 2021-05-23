import FileTree from "./fileTree";

export function createFileTree(input) {
  const fileTree = new FileTree();

  const inputArray = [...input];

  const newArr = [];

  let parent = input[0];
  let id = parent.id;

  newArr.push(parent);

  for (let i = 1; i < inputArray.length; i++) {
    const result = inputArray.find((element) => element.parentId === id);
    newArr.push(result);
    id = result.id;
  }

  for (const inputNode of newArr) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}
