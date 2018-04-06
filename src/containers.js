import { connect } from 'react-redux'
import { changeMinRating } from './actions'
import { MainComponent } from './components'

const mapStateToProps = state => {
  return {
    minRating: state.minRating
  }
}

const mapDispatchToProps = dispatch => ({
  handleMinRatingChange: e => dispatch(changeMinRating(e.target.value))
})

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent)