console.log("🔵 JavaScript Memory Allocation - Stack & Heap\n");

// 1️⃣ Stack Memory (Stores Primitive Data)
function stackMemoryDemo() {
    let num = 10; // Stored in Stack
    let str = "Hello"; // Stored in Stack
    console.log("Stack Memory Example:", { num, str });
}
stackMemoryDemo();

// 2️⃣ Heap Memory (Stores Objects and Reference Types)
function heapMemoryDemo() {
    let person = { name: "Amit", age: 28 }; // Stored in Heap
    let anotherPerson = person; // Reference to the same Heap memory
    anotherPerson.age = 30; // Modifies original object

    console.log("Heap Memory Example:");
    console.table([
        { Variable: "person", Name: person.name, Age: person.age },
        { Variable: "anotherPerson", Name: anotherPerson.name, Age: anotherPerson.age }
    ]);
}
heapMemoryDemo();

// 3️⃣ Stack & Heap Visual Representation
console.log(`
🟢 Stack Memory:
| num: 10 | str: "Hello" |

🔴 Heap Memory:
| person: { name: "Amit", age: 30 } |
| anotherPerson (Reference to person) |
`);
