import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { useSelector, useDispatch } from 'react-redux'

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
      dispatch({ type: 'genre/add', id: row.id })
    } else {
      dispatch({ type: 'genre/remove', id: row.id })
    }
    console.log(genresSelected)
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: genresSelected,
    onSelect: handleOnSelect,
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
              <Card bg="primary" style={{ width: '14rem' }}>
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
