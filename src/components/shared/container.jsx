import { cn } from '../../../lib/utils';
import {React} from 'react';

const Container = ({children, className}) => {
  return ( <div className={cn('container mx-auto px-5 lg:px-0 ',className)}>{children}
  </div> );
}
 
export default Container;