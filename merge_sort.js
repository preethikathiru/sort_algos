function merge(A,start,mid,end) {
   var p = start ,q = mid+1;
   var Arr = new Array(end-start+1) , k=0;
   for( i = start ;i <= end ;i++) {
       if(p > mid)      
          Arr[ k++ ] = A[ q++] ;
      else if ( q > end)   
          Arr[ k++ ] = A[ p++ ];
      else if( A[ p ] < A[ q ])     
         Arr[ k++ ] = A[ p++ ];
      else
         Arr[ k++ ] = A[ q++];
    }
    for ( p=0 ; p< k ;p ++) {
        A[ start++ ] = Arr[ p ] ;                          
    }
    if(Arr.length == 6){
      console.log(A);
    }
}

function merge_sort (A,start,end )
{
    if( start < end ) {
    	var mid = Math.floor((start + end ) / 2) ;          
     	merge_sort (A, start , mid ) ;                
     	merge_sort (A,mid+1 , end ) ;   
    	merge(A,start , mid , end );   
    }
}  

merge_sort([5,1,9,2,4,7],0,5);