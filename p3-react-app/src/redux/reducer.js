const initialState = {
    allBills: [
        {
        timeCreated: '4:14:42 PM',
        dateCreated: 'Fri Oct 28 2022',
        name: 'PLDT',
        amount: 1699,
        dueDate: '2022-11-20',
        planToPay: '2022-11-18',
        status: 'PENDING',
        },
        {
        timeCreated: '4:14:42 PM',
        dateCreated: 'Fri Oct 28 2022',
        name: 'GLOBE',
        amount: 999,
        dueDate: '2022-11-20',
        planToPay: '2022-11-18',
        status: 'PAID'
        }
    ]
};


const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD':
            const date = new Date();
            const currentDate = date.toDateString();
            const currentTime = date.toLocaleTimeString();
            let newBills = {
                timeCreated: currentTime,
                dateCreated: currentDate,
                name: action.payload.name.toUpperCase(),
                amount: parseFloat(action.payload.amount),
                dueDate: action.payload.dueDate,
                planToPay: action.payload.planToPay,
                status: action.payload.status
            };
            return {...state, allBills: [...state.allBills, newBills]};
        case 'REMOVE':
            return {...action, allBills: state.allBills.filter(bill => bill.name !== action.payload.name)
            };
        case 'PAID':
            let currentBills1 = state.allBills;
            for( let index = 0; index < currentBills1.length; index++) {
                if(currentBills1[index].name === action.payload.name) {
                    currentBills1[index].status = 'PAID';
                }
            }
            return {...state, allBills: [...currentBills1] };
        case 'UNDO':
            let currentBills2 = state.allBills;
            for( let index = 0; index < currentBills2.length; index++) {
                if(currentBills2[index].name === action.payload.name) {
                    currentBills2[index].status = 'PAID';
                }
            }
            return {...state, allBills: [...currentBills2] };
        default:
            return state;
    }
}
export default reducer;