// Huffman coding implementation in JavaScript

// Node class represents each node in the Huffman tree
class Node {
    constructor(character, frequency, left = null, right = null) {
        this.character = character; // The character
        this.frequency = frequency; // The frequency of the character
        this.left = left; // Left child
        this.right = right; // Right child
    }
}

// Function to build the frequency map
  function buildFrequencyMap(str) {
    const frequencyMap = {};
    for (let char of str) {
        if (!frequencyMap[char]) {
            frequencyMap[char] = 0;
        }
        frequencyMap[char]++;
    }
    return frequencyMap;
  }

// Function to build the priority queue from the frequency map
  function buildPriorityQueue(frequencyMap) {
    const priorityQueue = [];
    for (let char in frequencyMap) {
        priorityQueue.push(new Node(char, frequencyMap[char]));
    }
    return priorityQueue.sort((a, b) => a.frequency - b.frequency);
 }

// Function to build the Huffman tree
  function buildHuffmanTree(priorityQueue) {
    while (priorityQueue.length > 1) {
        const left = priorityQueue.shift();
        const right = priorityQueue.shift();
        const newNode = new Node(null, left.frequency + right.frequency);
        newNode.left = left;
        newNode.right = right;
        priorityQueue.push(newNode);
        priorityQueue.sort((a, b) => a.frequency - b.frequency);
    }
    return priorityQueue[0]; //
  }

// Function to build the Huffman codes from the Huffman tree
  function buildHuffmanCodes(buildHuffmanTree) {
    const codes = {};
    function traverse(node, code) {
        if (node.character !== null) {
            codes[node.character] = code;
            return;
        }
        traverse(node.left, code + '0');
        traverse(node.right, code + '1');
    }
    traverse(buildHuffmanTree, '');
    return codes;
  }

// Function to encode the input string using Huffman codes
 function encodeString(str, codes) {
    let encodedString = '';
    for (let char of str) {
        encodedString += codes[char];
    }
    return encodedString;
 }

// Function to decode the encoded string using the Huffman tree
function decodeString(encodedStr, buildHuffmanTree) {
    let decodedString = '';
    let currentNode = buildHuffmanTree;
    for (let bit of encodedStr) {
        currentNode = bit === '0' ? currentNode.left : currentNode.right;
        if (currentNode.character !== null) {
            decodedString += currentNode.character;
            currentNode = buildHuffmanTree;
        }
    }
    return decodedString;
}


// Get user input for the string to encode
const inputString = process.argv[2];
if (inputString) {
    const frequencyMap = buildFrequencyMap(inputString);
    const priorityQueue = buildPriorityQueue(frequencyMap);
    const huffmanTree = buildHuffmanTree(priorityQueue);
    const huffmanCodes = buildHuffmanCodes(huffmanTree);
    const encodedString = encodeString(inputString, huffmanCodes);
    const decodedString = decodeString(encodedString, huffmanTree);

    console.log("Input String: ", inputString);
    console.log("Frequency Map: ", frequencyMap);
    console.log("Huffman Codes: ", huffmanCodes);
    console.log("Encoded String: ", encodedString);
    console.log("Decoded String: ", decodedString);
} else {
    console.log("No input provided.");
}
