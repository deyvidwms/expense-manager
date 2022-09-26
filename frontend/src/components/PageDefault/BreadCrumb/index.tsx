import { FaAngleRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumb.module.scss';

import Utils from '../../../assets/js/Utils';

const BreadCrumb = () => {
  const caminhoBreadCrumb = useLocation().pathname.split('/').filter(element=>element.length > 0);
  
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.breadcrumbList}>
        { caminhoBreadCrumb.map( (element, index, array) => (
          index < array.length-1 ? (
          <Link key={index} to={Utils.getValueOfBreadCrumb(array, index)} >
            <p className={styles.breadcrumbItem}>{element}</p>
            <FaAngleRight />
          </Link> 
          ) : ( 
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={index}>
              <p className={styles.breadcrumbCurrentItem}>{element}</p> 
            </a>
          )
        )) }
      </div>

      <h1 className={styles.breadcrumbCurrentItemTitle}>{caminhoBreadCrumb[caminhoBreadCrumb.length-1]}</h1>

    </div>
  )
}

export default BreadCrumb;