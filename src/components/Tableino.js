import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/lib/Table';
import {sort,paginate} from '../actions'

let Tableino = ({ ...table,dispatch}) => {
    let colIndex = 0;
    let header =[];
    let rows=[];
    let rowEl=[];
    let maxPage = 1;
    let paginateButtons = [];   
    let entries =[] 
    if(table.entries){
        entries =[...table.entries] 
        maxPage=Math.ceil(entries.length/3)
        console.log(table.page,maxPage)
        entries.filter((t,i) =>{
            console.log((table.page-1)*maxPage)
            return true
        })
        entries = entries.filter((t,i) => 
         ((table.page-1)*3)<=i && i<=((table.page-1)*3)+(3-1))
         if(entries.length>0){
            for(let i = 0; i<maxPage; i++){
                paginateButtons=paginateButtons.concat(
                    <button onClick={e => {
                        console.log(111);
                        dispatch(paginate(0,i+1))
                        e.preventDefault()
                        
                    }}> {i+1} </button>
                )
            }
        }
    }
    
    // table = table.entries.filter((t,i) => t.length)
    if(table.headers.length>0){
        colIndex = table.headers.length
            table.headers.map((head,i) =>{
               header = header.concat(<th
                onClick={e => {
                    console.log(111);
                    dispatch(sort(0,i))
                    e.preventDefault()
                    
                }}
                >{head}</th>)
            })

        // console.log(header);
        if(entries.length>0){
                entries.map((row,k) =>{
                    rowEl=[];

                    

                    row.map(re=>{
                        rowEl=rowEl.concat(<th>{re}</th>)
                    })
                    rows= rows.concat(<tr>{
                        rowEl.map(ele=>ele)
                    }</tr>)
                })
    
            // console.log(header);
            
        }  
    }  
    // sort = (i, myArray)=>{
    //     return myArray.sort(function(a, b) {
    //         return a[1].localeCompare(b[1]);
    //     })
    // }
    return(
        <div>
        <Table>
            <tbody>
                <tr>
                    {header.map(el=>{
                        return el
                    })}
                </tr>
                {rows.map(el=>{
                        return el
                    })}
            </tbody>
        </Table>
                {paginateButtons.map(el=>{
                    return el
                })}
        
        
        </div>
    )
}

Tableino.propTypes = {
    col: PropTypes.any.isRequired
}
Tableino = connect()(Tableino)

export default Tableino