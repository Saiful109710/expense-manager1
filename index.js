
function getInputValueId(id){
    return parseFloat(document.getElementById(id).value)
}

const calculateBtn = document.getElementById("calculate");
let count = 0;


calculateBtn.addEventListener("click",()=>{
   
    const income = getInputValueId("income");
    const software = getInputValueId("software");
    const courses = getInputValueId("courses");
    const internet = getInputValueId("internet");
    



    if(income<=0 || isNaN(income)){
        document.getElementById("income-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("income-error").classList.add('hidden');
    }
    
    if(software<=0 || isNaN(software)){
        document.getElementById("software-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("software-error").classList.add('hidden');
    }
    if(courses<=0 || isNaN(courses)){
        document.getElementById("courses-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("courses-error").classList.add('hidden');
    }
    if(internet<=0 || isNaN(internet)){
        document.getElementById("internet-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("internet-error").classList.add('hidden');
    }

    const totalExpense = software + courses + internet;
    if(totalExpense>income){
        document.getElementById("logic-error").classList.remove("hidden");
        return;
    }else{
        document.getElementById("logic-error").classList.add("hidden"); 
    }
    const balance = income - totalExpense;

    console.table({totalExpense,balance});
    const totalExpenseElement = document.getElementById("total-expenses");
    const balanceElement = document.getElementById("balance")
    totalExpenseElement.innerText = totalExpense.toFixed(2)
    balanceElement.innerText = balance

    const result = document.getElementById("results");
    result.classList.remove("hidden");
    count+=1;
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";
    historyItem.innerHTML = `
        <p>${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income :$${income.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expenses :$${totalExpense.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance :$${balance.toFixed(2)}</p>
    `

    const historyList = document.getElementById('history-list');
    historyList.insertBefore(historyItem,historyList.firstChild)
    document.getElementById("income").value = ''
    document.getElementById("software").value = ''
    document.getElementById("courses").value = ''
    document.getElementById("internet").value = ''
})

const calculateSavingsBtn = document.getElementById("calculate-savings");
calculateSavingsBtn.addEventListener("click",()=>{
    const income = parseFloat(document.getElementById("income").value);

    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const savingsPercentage = parseFloat(document.getElementById("savings").value);
    console.log(savingsPercentage)
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;
    const savingAmount = (savingsPercentage * balance) / 100;
    const remainingBalance = balance-savingAmount;

    console.log(savingAmount)
    const savingAmountElement = document.getElementById("savings-amount");
    savingAmountElement.innerText = savingAmount;
    const remainingBalanceElement = document.getElementById("remaining-balance")
    remainingBalanceElement.innerText = remainingBalance
    
    document.getElementById("savings").value = ''
    
})
const assistantTabBtn = document.getElementById("assistant-tab");
const historyTabBtn = document.getElementById("history-tab");
historyTabBtn.addEventListener("click",()=>{
    historyTabBtn.classList.add("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");

    
    assistantTabBtn.classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");

    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
})

assistantTabBtn.addEventListener("click",()=>{
    assistantTabBtn.classList.add("text-white","bg-gradient-to-r","from-blue-500","to-purple-600");
    historyTabBtn.classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600")
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})

document.getElementById("income").addEventListener("input",()=>{
    const inputValue = parseFloat(document.getElementById("income").value);
    
    if(inputValue<=0 || isNaN(inputValue)){
        document.getElementById("income-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("income-error").classList.add('hidden');
    }
})

document.getElementById("software").addEventListener("input",()=>{
    const inputValue = parseFloat(document.getElementById("software").value);
    
    if(inputValue<=0 || isNaN(inputValue)){
        document.getElementById("software-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("software-error").classList.add('hidden');
    }
})

document.getElementById("courses").addEventListener("input",()=>{
    const inputValue = parseFloat(document.getElementById("courses").value);
    
    if(inputValue<=0 || isNaN(inputValue)){
        document.getElementById("courses-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("courses-error").classList.add('hidden');
    }
})

document.getElementById("internet").addEventListener("input",()=>{
    const inputValue = parseFloat(document.getElementById("internet").value);
    
    if(inputValue<=0 || isNaN(inputValue)){
        document.getElementById("internet-error").classList.remove('hidden');
        return;
    }else{
        document.getElementById("internet-error").classList.add('hidden');
    }
})