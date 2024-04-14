import { Component } from 'react'
import { Wardrobes } from './Wardrobes'
import { DataContext, IDataContext } from '../contexts/DataContext'

export class Library extends Component {
    declare context: IDataContext

    render() {
        return <Wardrobes wardrobes={this.context.data.library.wardrobes} />
    }
}

Library.contextType = DataContext
