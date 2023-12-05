import './Pagination.scss'
import ReactPaginate from 'react-paginate'

function Pagination({ setPage }) {
	const changePagination = ell => {
		setPage(ell.selected + 1)
	}
	return <ReactPaginate className='pagination' nextLabel='>' onPageChange={changePagination} pageCount={3} previousLabel='<' />
}

export default Pagination
