export class InMemoryTodoService {
    createDb() {
        let data = [
            {
                "id": 1,
                "name": "List for Work",
                "items": [
                    "Finish issue 12",
                    "Have a meeting with Uros",
                    "Organize lunch with your collegue",
                    "Finish started work on todo"
                ]
            },
            {
                "id": 2,
                "name": "Car Checklist",
                "items": [
                    "Check oil",
                    "Check vipers",
                    "Change air filter"
                ]
            },
            {
                "id": 3,
                "name": "Todo for home",
                "items": [
                    "Water the flowers",
                    "Take Billy for dinner"
                ]
            },
            {
                "id": 4,
                "name": "Laptop Checklist",
                "items": [
                    "Defragment the harddrive",
                    "Reinstall Windows"
                ]
            },
            {
                "id": 5,
                "name": "Dummy list",
                "items": [
                    "Dummy item 1",
                    "Dummy item 2",
                    "Dummy item 3"
                ]
            },
            {
                "id": 6,
                "name": "Dummy list 2",
                "items": [
                    "Dummy item 1",
                    "Dummy item 2",
                    "Dummy item 3"
                ]
            }
        ]

        return { data };
    }
}