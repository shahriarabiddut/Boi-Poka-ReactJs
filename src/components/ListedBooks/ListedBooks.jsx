import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishedList } from '../../utility/addToDB';
import Book from '../Book/Book';
export default function () {
    const [readList,setReadList] = useState([]);
    const [wishList,setWishList] = useState([]);
    const allBooks = useLoaderData();
    // useEffect(()=>{
    //     // Read List
    //     const storedReadList = getStoredReadList();
    //     const storedReadListInt = storedReadList.map(id=> parseInt(id));
    //     const readBookList = allBooks.filter(book=> storedReadListInt.includes(book.bookId));
    //     setReadList(readBookList);
    //     // Wished
    //     const storedWishedList = getStoredWishedList();
    //     const storedWishedListInt = storedWishedList.map(id=> parseInt(id));
    //     const wishList = allBooks.filter(book=> storedWishedListInt.includes(book.bookId));
    //     setWishList(wishList);
    // },[]);
    const filterStoredList = (storedList, books) => {
        const storedListInt = storedList.map(id => parseInt(id));
        return books.filter(book => storedListInt.includes(book.bookId));
    };
    
    useEffect(() => {
        setReadList(filterStoredList(getStoredReadList() || [], allBooks));
        setWishList(filterStoredList(getStoredWishedList() || [], allBooks));
    }, []);
  return (
    <div className='my-6'>
        <h2 className="text-2xl my-8">
            ListedBooks
        </h2>
        <Tabs>
            <TabList>
            <Tab>Read List ({readList.length})</Tab>
            <Tab>Wish List ({wishList.length})</Tab>
            </TabList>

            <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                 {
                readList.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                 {
                wishList.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            </TabPanel>
        </Tabs>
    </div>
  )
}
