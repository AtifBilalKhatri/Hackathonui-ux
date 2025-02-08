import {defineType} from "sanity"

export const product =defineType({
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {
            name: "title",
            title : "Title",
            type: "string"
        },
        {
            name: "description",
            title : "Description",
            type: "text"
        },
        {
            name: "productImage",
            title : "Image",
            type: "image"
        },
        {
            name: "price",
            title : "Price",
            type: "number"
        },

    ]   
})