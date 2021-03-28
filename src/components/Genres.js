import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { useSelector, useDispatch } from 'react-redux'
import Tags from './tags.json'

const Genres = () => {
  const genresSelected = useSelector((state) => state.genres)
  const dispatch = useDispatch()

  const { SearchBar } = Search

  const columns = [{
    dataField: 'name',
    text: 'Genre',
  }, {
    dataField: 'effect',
    text: 'Positive effect',
    style: { fontFamily: 'Computer Modern Serif, serif' },
  }]

  const tags = Tags.data

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      dispatch({ type: 'genre/add', id: row.id })
    } else {
      dispatch({ type: 'genre/remove', id: row.id })
    }
  }

  const handleOnSelectAll = (isSelect, rows) => {
    if (isSelect) {
      rows.forEach((row) => {
        dispatch({ type: 'genre/add', id: row.id })
      })
    } else {
      rows.forEach((row) => {
        dispatch({ type: 'genre/remove', id: row.id })
      })
    }
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: genresSelected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
  }

  return (
    <>
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

      <h3>Selected tags:</h3>
      <CardColumns>
        {
          genresSelected.map((id) => {
            const tag = tags.find((e) => e.id === id)
            return (
              <Card bg="primary" style={{ width: '14rem', color: 'white', margin: 4 }}>
                <Card.Title>{tag.name}</Card.Title>
              </Card>
            )
          })
        }
      </CardColumns>
    </>
  )
}

export default Genres
