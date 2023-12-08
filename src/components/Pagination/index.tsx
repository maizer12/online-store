import './Pagination.scss'
import { FC, memo } from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
	setPage: (i: number) => void
}

const Pagination: FC<Props> = memo(({ setPage }) => {
	const changePagination = (ell: { selected: number }) => {
		setPage(ell.selected + 1)
	}
	return <ReactPaginate className='pagination' nextLabel='>' onPageChange={changePagination} pageCount={3} previousLabel='<' />
})

export default Pagination
