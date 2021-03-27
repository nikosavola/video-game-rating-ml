import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { useSelector, useDispatch } from 'react-redux'

const Genres = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const { SearchBar } = Search

  const columns = [{
    dataField: 'name',
    text: 'Genre',
  }, {
    dataField: 'effect',
    text: 'Effect',
  }]

  const tags = [{
    id: 0,
    name: 'Action',
    effect: 80,
  }, {
    id: 1,
    name: 'Platformer',
    effect: 70,
  }]

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState(() => ({
        selected: [...this.state.selected, row.id],
      }))
    } else {
      this.setState(() => ({
        selected: this.state.selected.filter((x) => x !== row.id),
      }))
    }
  }

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map((r) => r.id)
    if (isSelect) {
      this.setState(() => ({
        selected: ids,
      }))
    } else {
      this.setState(() => ({
        selected: [],
      }))
    }
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: state.selected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
  }

  return (
    <ToolkitProvider
      keyField="id"
      data={tags}
      columns={columns}
      search
    >
      {
        (props) => (
          <div>
            <h3>Search for genres:</h3>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              selectRow={selectRow}
            />
          </div>
        )
      }
    </ToolkitProvider>
  )
}

export default Genres
