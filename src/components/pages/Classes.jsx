import { Component } from "react"

export default class Classes extends Component {
  render() {
    const { classId } = this.props.params
    return (
      <div>
        <h1>Dental Spa is now offering Dental Classes 📚</h1>
        <p>route params: {classId}</p>
      </div>
    )
  }
}