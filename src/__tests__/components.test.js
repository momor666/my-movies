/* eslint-env jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MainComponent, MovieGrid, MovieGridItem } from '../components'

Enzyme.configure({ adapter: new Adapter() })

describe('components', () => {
  describe('Movie Grid', () => {
    it('should filter movies according to min rating', () => {
      const movies = {
        results: [
          {
            id: 0,
            vote_average: 6.1,
            title: 'Fifty Shades Freed'
          },
          {
            id: 1,
            vote_average: 7.4,
            title: 'Black Panther'
          },
          {
            id: 2,
            vote_average: 7.8,
            title: 'Coco'
          }
        ]
      }

      const minRating = 7
      const movieGridComp = <MovieGrid movies={movies.results} minRating={minRating} />
      const wrapper = shallow(movieGridComp)

      expect(wrapper.find(MovieGridItem).length).toEqual(2)
    })
  })

  describe('Main Component', () => {
    it('should fetch movies on mount', () => {
      const handleFetchMoviesMock = jest.fn()
      const mainComp = <MainComponent handleFetchMovies={handleFetchMoviesMock} />
      shallow(mainComp)
      expect(handleFetchMoviesMock.mock.calls.length).toBe(1)
    })
  })
})
