import React, {Component} from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component{
    render() {
        if(!this.props.book){
            return  <div >
                        You can select a book from the list and see the 
                    </div>
        }
        return(
            <div className="card">
                <img className="card-img-top" src={this.props.book.image} alt="Card image cap"/>
                <div className="card-body">
                    <h1 className="card-title">{this.props.book.title}</h1>
                    <p>Author: {this.props.book.author}</p>
                    <p>Pages: {this.props.book.pages}</p>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
