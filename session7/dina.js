var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productModel=document.getElementById("productModel");
var productDesc=document.getElementById("productDesc");
var productList=[];
var addProductBtn=document.getElementById("addProductBtn");
var updateProductBtn=document.getElementById("updateProductBtn");



if (localStorage.getItem("productList")==null){
    var productList=[];
}else{
    productList=JSON.parse(localStorage.getItem("productList"))
    console.log(productList);
    displayProduct(productList)
}
function addProduct(){
    console.log(productList);
    var product={
        name:productName.value,
        price:productPrice.value,
        model:productModel.value,
        product:productDesc.value,
    }
    // clearForm();
    productList.push(product);
    displayProduct(productList);
    console.log("hello",productList);
    localStorage.setItem("productList",JSON.stringify(productList));
    updateFormValues();
}
function clearForm(){
    productName.value="";
    productPrice.value="";
    productModel.value="";
    productDesc.value="";
}


function displayProduct(products){
var cartoona=``;
for(var i=0; i<products.length; i++){
    cartoona+= `         <tr>
    <td>${i+1}</td>
    <td>${products[i].newName?products[i].newName:products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].model}</td>
    <td>${products[i].product}</td>
    <td>
        <button onclick="getUpdateProduct(${i})"class="btn btn-warning btn-sm">update</button>
    </td>
    <td>
        <button onclick="deleteProduct(${i})"class="btn btn-danger btn-sm">delete</button>
    </td>
</tr>
`;
}
document.getElementById("tbody").innerHTML=cartoona;
}

function deleteProduct(index){
    console.log('delete');
    productList.splice(index,1);
    console.log(productList);
    localStorage.setItem("productList",JSON.stringify(productList)) 
    displayProduct(productList)
    
}
console.log(localStorage.getItem("username"));

function searchByName(term){
    var foundedItems=[]
    for(var i=0; i<productList.length;i++){
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())==true) {
            console.log("founded",i);
            productList[i].newName=productList[i].name.toLowerCase().replace(term.toLowerCase(),`<span class="text-danger"> ${term}</span>`)
            
            foundedItems.push(productList[i])
        }
    }
    displayProduct(foundedItems)
}

// searchByName("term")
function getUpdateProduct(bate5){
    console.log(bate5,"updated");
    addProductBtn.classList.add("d-none")
    updateProductBtn.classList.replace('d-none','d-block')
    // productName.value=productList[bate5].name;
    // productPrice.value=productList[bate5].price;
    // productModel.value=productList[bate5].model;
    // productDesc.value=productList[bate5].product;
    updateFormValues(productList[bate5]);
}

function updateFormValues(flag){
    productName.value=flag ? flag.name :"";
    productPrice.value=flag ? flag.price :"";
    productModel.value=flag ? flag.model :"";
    productDesc.value=flag ? flag.product :"";
}
function updateProduct(){
    addProductBtn.classList.replace("d-none", 'd-block')
    updateProductBtn.classList.replace('d-block','d-none')
}