import React, { Component } from 'react'

type CounterState = {
    count: number,
}

type CounterProps = {
    message: string
}

export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  render(): React.ReactNode {
      return (
        <div>
            <button onClick={this.handleClick}>Increment</button>
            {this.props.message} {this.state.count}
        </div>
      )
  }
}
