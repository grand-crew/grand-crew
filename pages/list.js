import React from 'react'
import Griddle from 'griddle-react'
import data from '../data.js'

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      data,
      rowMetaData: {},
      selectedData: [],
      emailBody: '',
    }
  }

  handleClick (row) {
    const wine = row.props.data.Wine
    const vintage = row.props.data.Vintage
    const newData = this.state.data
    const selectedData = this.state.selectedData
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.newData[i].Wine === wine && this.state.newData[i].Vintage === vintage) {
        data[i].selected = !data[i].selected
        selectedData.push(data[i])
      }
    }
    this.setState({ newData, selectedData })
    const emailBody = this.constructEmailBody()
    this.setState({ emailBody })
  }

  constructEmailBody () {
    let body = ''
    const selectedData = this.state.selectedData
    for (let i = 0; i < selectedData.length; i++) {
      body = `${body} ${selectedData[i].Wine}, ${selectedData[i].Vintage}, ${selectedData[i]["Wholesale price /bttle"]} | `
    }
    return body
  }

  render () {
    let rowMetaData = {
      bodyCssClassName (rowData) {
        if (rowData.selected === true) {
          return 'selected'
        }
        return ''
      },
    }

    return (
      <div>
        <h2>
          This list is for presale only.
        </h2>
        <p>
          There is no guarantee these wines will be available but this allows us to know of the wine listed here, which you would be interested in purchasing. Feel free to sort and filter to find the wines you are looking for. Selecting them will help you put an order together. At the bottom are some email links to Grand Crew founders to notify us of which wines you are most interested in. Enjoy!
        </p>
        <Griddle
          ref="griddleTable"
          columns={['Wine', 'Vintage', 'Wholesale price /bttle']}
          results={this.state.data}
          showFilter
          resultsPerPage="200"
          showPager={false}
          useGriddleStyles={false}
          rowMetadata={rowMetaData}
          onRowClick={this.handleClick.bind(this)}
        />
      <form action="mailto:nturner@gmail.com?cc=arthurrobin55@gmail.com,gamble.mcadam@gmail.com">
        <input type="hidden" name="Subject" value="Wine Interest" />
        <input type="hidden" name="Body" value={this.state.emailBody} />
        <input type="submit" value="Contact Us With Your Preferred Wine!" />
      </form>
      for questions, email:
      <br />
      <a href="mailto:nturner@gmail.com">Neil Turner</a>
      <br />
      <a href="mailto:arthurrobin55@gmail.com">Arthur Robin</a>
      <br />
      <a href="mailto:gamble.mcadam@gmail.com">Gamble McAdam</a>
    </div>
  )
  }
}
