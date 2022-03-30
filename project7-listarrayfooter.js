import React from 'react';

const ListArrayFooter = () => {
    const today = new Date();

    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default ListArrayFooter;
