import React, {useEffect, useState} from 'react'
import './Banner.css'

import {getDocs, collection, query, orderBy, limit} from 'firebase/firestore'

import { db } from '../../config/firebaseConfig' 

function Banner() {

    const [mainArticle, setMainArticle] = useState({})
    const [otherArcticles, setOtherArticles] = useState([])

    // get data when banner loads

    useEffect(
        ()=> {
            // create a variable to reference the arcticles

            const articleRef = collection(db, 'Articles')

            // set up query to filter responses
            // sort and then get the latest 5 articles
            const q = query(articleRef, orderBy('createdAt','desc'), limit(5))

            // get arcticles from (db) data base

            // need to pass the (q) query first then => articleRef
            getDocs(q, articleRef)
            .then(res => {
                // console.log(res.docs[0].data())

                const articles = res.docs.map(item => ({
                    ...item.data(),
                    id: item.id,
                }))

                // console.log('articles',articles)
                setMainArticle(articles[0])
                setOtherArticles(articles.splice(1))
            })
            .catch(err=>console.log(err))

        }, [] // run once when the page loads
    )


  return (
    <div className='banner-container'>
        <div className='main-article-container' 
        style={{backgroundImage:`url(${mainArticle?.imageUrl})`}}>
            <div className='banner-info'>
                <h2>{mainArticle?.title}</h2>
                <div className='main-article-info'>
                    <p>{mainArticle?.createdAt?.toDate().toDateString()}</p> 
                </div>
            </div>
        </div>
        <div className='other-articles-container'>
            {
                otherArcticles.map(item => (<div className='other-article-item'
                style={{backgroundImage:`url(${item?.imageUrl})`}}>
                    <div className='banner-info'>
                            <h3>{item?.title}</h3>
                        <div className='banner-info'>
                            <small>{item?.createdAt?.toDate().toDateString()}</small> 
                        </div>
                    </div>

                </div>))
            }
        </div>
    </div>
  )
}

export default Banner