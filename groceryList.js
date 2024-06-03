const groceryList=document.querySelector('#groceryList')
const list=document.querySelector('#list')
groceryList.addEventListener('submit',(e)=>{
    e.preventDefault()
    const productInput=groceryList.elements.product.value;
    const quantityInput=groceryList.elements.qty.value;
    const li=document.createElement('li')
    li.innerText=`${quantityInput } ${productInput}`
    list.append(li);
    groceryList.reset();
    list.addEventListener('click',(e)=>{
        e.target.remove();
    })

})