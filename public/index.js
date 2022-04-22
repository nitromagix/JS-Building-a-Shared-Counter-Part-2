
const update = async (counterValue) => {
   const response = await fetch('http://localhost:9001/counter', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        'value': counterValue
      })
      });

   const j = await response.json();
   console.log(j)
}

const main = async () => {
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');
    const result = await response.json();
    let countValue = result.value;

    async function increment(){
        countValue++;
        countContainer.textContent = countValue;
        await update(countValue);
    }

    async function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        await update(countValue);
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()
