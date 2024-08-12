import React from 'react';
import './App.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            submit: 'Next Quotes',
            randomIndex: 0,
            color: '#000000'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleColor(){
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }

    handleChange(){
        const newColor = this.handleColor();
        this.setState({
            randomIndex: Math.floor(Math.random() * 20),
            color: newColor
        });
    }
    
    render(){
        
        const quotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
            { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
            { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
            { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
            { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
            { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
            { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
            { text: "The mind is everything. What you think you become.", author: "Buddha" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
            { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
            { text: "The best revenge is massive success.", author: "Frank Sinatra" },
            { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
            { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
            { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
            { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
        ];

        const randomIndexQuote = quotes[this.state.randomIndex];

        const colorStyle = {
            backgroundColor: this.state.color
        }
        const textColor ={
            color: this.state.color
        }

        return(
            <div className="main-container" style={colorStyle}>
                <div className="quote-box">
                        <div>

                        <h1 style={textColor} className="quote-style" id="text"><span className="double-quote">"</span>{randomIndexQuote.text}</h1>
                        <p style={textColor} className="author-style" id="author">- {randomIndexQuote.author}</p>

                        </div>
                        
                    <div className="btn-container">
                        <a 
                            href="https://twitter.com/intent/tweet?text=Your%20quote%20here" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            id="tweet-quote">
                                <i style={textColor} className="fab fa-twitter-square"></i>
                        </a>
                        <a 
                            href="https://tumblr.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            id="tweet-quote">
                                <i style={textColor} className="fab fa-tumblr-square"></i>
                        </a>
                        <button className="btn-design" id="new-quote" onClick={this.handleChange} style={colorStyle}>{this.state.submit}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;