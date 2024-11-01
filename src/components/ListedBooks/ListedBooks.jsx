import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishedList } from '../../utility/addToDB';
import Book from '../Book/Book';
export default function () {
    const [readList,setReadList] = useState([]);
    const [wishList,setWishList] = useState([]);
    const [sort,setSort] = useState('');
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

    //Sorting
    const handleSort = (sortType,storedList,storedListName) =>{
        setSort(sortType);
        if(sortType === 'Ratings'){
            const sortedList = [...storedList].sort((a,b) => b.rating * 10 - a.rating * 10 );
            storedListName === 'read' ? setReadList(sortedList) : setWishList(sortedList);
        }else{
            const sortedList = [...storedList].sort((a,b) => b.totalPages * 10 - a.totalPages * 10 );
            storedListName === 'read' ? setReadList(sortedList) : setWishList(sortedList);
        }
    }
  return (
    <div className='my-6'>
        <h2 className="text-2xl my-8">
            ListedBooks
        </h2>
        <Tabs>
            <TabList>
            <Tab onClick={()=>setSort('')}>Read List ({readList.length})</Tab>
            <Tab onClick={()=>setSort('')}>Wish List ({wishList.length})</Tab>
            </TabList>

            <TabPanel>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{ sort ? `Sort By : ${sort}`: `Sort By `}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={()=>handleSort('Ratings',readList,'read')}>Ratings</a></li>
                    <li><a onClick={()=>handleSort('Number Of Pages',readList,'read')}>Number Of Pages</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
                 {
                readList.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            </TabPanel>
            <TabPanel>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{ sort ? `Sort By : ${sort}`: `Sort By `}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={()=>handleSort('Ratings',wishList,'wish')}>Ratings</a></li>
                    <li><a onClick={()=>handleSort('Number Of Pages',wishList,'wish')}>Number Of Pages</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
                 {
                wishList.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            </TabPanel>
        </Tabs>
    </div>
  )
}
