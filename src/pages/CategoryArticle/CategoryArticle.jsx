import React, {useEffect, useState} from 'react'
import './CategoryArticle.css'

import { useParams } from 'react-router-dom'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig' 

function CategoryArticle() {

  const {categoryName} = useParams()

  const [articles, setArticles] = useState([])

  useEffect(
    ()=> {
      // create a reference to a firestore db collection
      const articleRef = collection(db, 'Articles')
      // now create query 
      const q = query(articleRef, where('category','==',categoryName))
      // now get data that matches the query
      getDocs(q, articleRef)
      .then(res=> {
        // converting to a readable array
        const articles = res.docs.map(item => ({
          ...item.data(),
          id: item.id,
        }))
        .catch(err=>console.log(err))
        // console.log(articles)
        setArticles(articles)

      })

    }, [categoryName] // anytime the category name changes run it
  )

  return (
      <div>
        {
          articles.map(item =><h2>{item?.title}</h2> )
        }
      </div>
  )
}

export default CategoryArticle