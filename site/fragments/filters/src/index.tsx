import { useEffect } from 'react'
import { useState }  from 'react'
import React         from 'react'

import { Filters }   from './Filters'
import { useData }   from './useData'

const doNothing = () => {
  // do nothing
}

const FiltersFragment = ({
  title = '',
  activeCategory = '',
  selectCategory = doNothing,
  check = false,
}) => {
  const data = useData()
  const [activeKey, setActiveKey] = useState([])

  const onChange = (value) => {
    setActiveKey(value)
  }

  useEffect(() => {
    if (data && activeCategory) {
      const keys = []
      data.map((item) => {
        item.children.map((child: any) => {
          if (child.id === activeCategory) {
            // @ts-ignore
            keys.push(item.id)
          }
          return true
        })
        return true
      })
      setActiveKey(keys)
    }
  }, [data, activeCategory])

  return (
    <Filters
      data={data}
      title={title}
      activeCategory={activeCategory}
      selectCategory={selectCategory}
      activeKey={activeKey}
      check={check}
      onChange={onChange}
    />
  )
}

export default FiltersFragment
