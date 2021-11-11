export interface productModel{
  id: number,
  name: string,
  price: string,
  discount_price: string,
  description: string,
  image: string,
  status:number,
  category: categoryModel,
  subcategory: subcategoryModel
}

export interface categoryModel{
  id: number,
  name: string
}

export interface subcategoryModel{
  id: number,
  name: string
}
