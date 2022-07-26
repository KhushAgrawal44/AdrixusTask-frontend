import React,{useState,useEffect} from "react"
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const Dashboard=(props)=>{

    const [data,setData]=useState([])
    const [filteredData,setFilteredData]=useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [uniBrands,setUniBrands]=useState([])
    const [uniCategory,setUniCategory]=useState([])
    const [selectedBrand,setSelectedBrand]=useState(null)
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [boolSort,setBoolSort]=useState(false)
    const itemsPerPage=10;

    useEffect(()=>{
       apiData()
    },[])

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filteredData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredData.length / itemsPerPage));
      }, [filteredData,itemOffset, itemsPerPage]);
    

     async function apiData() {
        const response = await fetch(`https://dummyjson.com/products?limit=100`, {
            method: 'GET',
           
          })
          const data=await response.json()
          console.log(data.products[0]);
          setData(data.products)
          setFilteredData(data.products)
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(data.products.slice(itemOffset, endOffset));
          setPageCount(10);
          const uniqueBrands = [...new Set(data.products.map(item => item.brand))]; // [ 'A', 'B']
          const uniqueCategories = [...new Set(data.products.map(item => item.category))]; // [ 'A', 'B']

          console.log(uniqueBrands);
          setUniBrands(uniqueBrands)
          console.log(uniqueCategories);
          setUniCategory(uniqueCategories)
    }


    const Items=({ currentItems })=> {
        return (
          <>
           <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Rating</th>
                      <th scope="col">Stock</th>
                    </tr>
                  </thead>
                  <tbody>

                  {currentItems && currentItems.map((item,i)=>(
                    <tr>
                        <th scope="row">{itemOffset+(i+1)}</th>
                        <td>{item.title}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>${item.price}</td>
                        <td>{item.rating}</td>
                        <td>{item.stock}</td>
                    </tr>
                  ))}

                  </tbody>

            </table>
            
          </>
        );
      }

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

      const handleBrandChange=(e)=>{
         console.log(e.target.value);
         if(e.target.value=="0")
         {
          setFilteredData(data)
         }
         else{
          setSelectedBrand(e.target.value)
          const newData=[];
          data&&data.map((d,i)=>{
           if(d.brand==e.target.value)
           {
             newData.push(d)
           }
          })
          console.log(newData);
          setFilteredData(newData)
         }
         
      }

      const handleCategoryChange=(e)=>{
        console.log(e.target.value);
        if(e.target.value=="0")
        {
         setFilteredData(data)
        }
        else{
         setSelectedCategory(e.target.value)
         const newData=[];
         data&&data.map((d,i)=>{
          if(d.category==e.target.value)
          {
            newData.push(d)
          }
         })
         console.log(newData);
         setFilteredData(newData)
        }
        
     }

     const handleSortChange=()=>{
      setBoolSort(!boolSort)
      console.log(boolSort);
      if(!boolSort)
      {
        const temparr=filteredData;

        temparr.sort((a, b) => (a.price > b.price) ? 1 : -1)
        console.log(temparr);
        setFilteredData(temparr)
        console.log(filteredData);
        setCurrentItems(filteredData.slice(0, 10));

      }
      else{
        window.location.reload(false)
      }
     }

    return(
        <div className="mx-auto text-center">
            
            <h1 className="m-5">Product Listing</h1>
             <div className="row col-10 mx-auto">
                 <div className="col">
                <select onChange={handleBrandChange} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected value="0">Select Brand</option>
                  {uniBrands && uniBrands.map((u,i)=>(
                    <option value={u}>{u}</option>
                  ))}
                  
                </select>
                </div>

                <div className="col">
                <select onChange={handleCategoryChange} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected value="0">Select Category</option>
                  {uniCategory && uniCategory.map((u,i)=>(
                    <option value={u}>{u}</option>
                  ))}
                  
                </select>
                </div>
                <div className="col">
                <div className="form-check">
                  <input onChange={handleSortChange} className="form-check-input-lg float-end" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    <h6>Sort by Price</h6>
                  </label>
                </div>
                </div>
             </div>
           <Items currentItems={currentItems} />
           <ReactPaginate
             className="pagination col-5 mx-auto"
             breakLabel="..."
             nextLabel="next >"
             onPageChange={handlePageClick}
             pageRangeDisplayed={10}
             pageCount={pageCount}
             previousLabel="< previous"             
             style={{minWidth:"100%"}}
             breakClassName={'page-item'}
             breakLinkClassName={'page-link'}
             containerClassName={'pagination'}
             pageClassName={'page-item'}
             pageLinkClassName={'page-link'}
             previousClassName={'page-item'}
             previousLinkClassName={'page-link'}
             nextClassName={'page-item'}
             nextLinkClassName={'page-link'}
             activeClassName={'active'}
           />
        </div>

    )
}

export default Dashboard