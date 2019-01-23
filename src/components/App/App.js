import React, { Component } from 'react';
import Gift from '../Gift/Gift';
import {max_number} from '../../helper'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gifts: []
    }

  }

  addGift = () => {
    const { gifts } = this.state
    const ids = this.state.gifts.map(gifts => gifts.id);
    
    gifts.push({ id: max_number(ids) + 1 })
    this.setState({ gifts })
  }

  removeGift = (id) => {
    const gifts=this.state.gifts.filter(gift => gift.id !== id)
    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <div>Gift Giver</div>
        <div className='gift-list'>
        {this.state.gifts.map(gift => {
          return (
            <Gift 
            key={gift.id}
            removeGift={this.removeGift}
            gift={gift}
            />
          )
        }
        )}
        </div>

        <button className="btn-add" onClick={this.addGift}>Add Gift</button>
      </div>
    )
  }
}

export default App;