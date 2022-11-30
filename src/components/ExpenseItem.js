
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div><img class="expense-item__image" src={props.image} alt="" /></div>
            <div className='expense-item__description'>{props.title}</div>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    );
}

export default ExpenseItem;