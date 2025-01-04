package main

import "fmt"

// Node represents the components of a binary search tree
type Node struct {
	Key   int
	Left  *Node
	Right *Node
}

// Insert method
// the key to add shoulnt be already in the tree
func (n *Node) Insert(k int) {
	if n.Key < k {
		if n.Right == nil {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	} else if n.Key > k {
		if n.Left == nil {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	}
}

// Search method
func (n *Node) Search(k int) bool {
	if n == nil {
		return false
	}
	if n.Key < k {
		return n.Right.Search(k)
	} else if n.Key > k {
		return n.Left.Search(k)
	}
	return true
}

// Draw method
func (n *Node) PrintTree(prefix string, isLeft bool) {
	if n == nil {
		return
	}

	fmt.Printf("%s", prefix)
	if isLeft {
		fmt.Printf("├── ")
	} else {
		fmt.Printf("└── ")
	}
	fmt.Println(n.Key)

	// Recurse for left and right children with adjusted prefixes
	newPrefix := prefix
	if isLeft {
		newPrefix += "│   "
	} else {
		newPrefix += "    "
	}
	n.Left.PrintTree(newPrefix, true)
	n.Right.PrintTree(newPrefix, false)
}

func main() {
	// Node tree should be an address, so need to use & to get the address
	tree := &Node{Key: 100}
	tree.Insert(50)
	tree.Insert(51)
	tree.Insert(49)
	tree.Insert(48)
	tree.Insert(47)
	fmt.Println(tree.Search(47))
	fmt.Println(tree)
	tree.PrintTree("", false)
}
