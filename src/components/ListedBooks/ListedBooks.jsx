import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    // this is not the right way once i use database that will be the real process.

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, []);

    return (
        <div>
            <h3>Listed Books</h3>
            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>
                <TabPanel>
                <h2 className='text-2xl font-bold'>Books I Read : {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                <h2 className='text-2xl font-bold'>Book That I wish to Read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;