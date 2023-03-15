function diziOlustur() {
  // 1000 elemanli bir dizi olustur
  let dizi = [];
  for (let i = 0; i < 1000; i++) {
    dizi.push(Math.floor(Math.random() * 10000000));
  }
  return dizi;
}

function linear_search(arr) {
  let n = arr.length;// atama oldugu icin islem degeri = 1
  let max_element = arr[0];// atama oldugu icin islem degeri = 1
  for (let i = 1; i < n; i++) {// dongu n - 1 kere tekrarlandigi icin islem degeri =  n - 1
    if (arr[i] > max_element) {//islem degeri = 1
      max_element = arr[i];//islem degeri = 1
    }
  }
  return max_element;//islem degeri = 1
  /*
  len(arr) islemi, listenin uzunlugunu almak icin O(1) zaman alir.
  
  max_element degiskenine ilk eleman atama islemi, O(1) zaman alir.
  
  for dongusu, n - 1 kez calisir. Dolayisiyla, for dongusunun karmasikligi T(n) = n'dir.
  
  if blogu, bir karsilastirma islemi icerir ve bu islem O(1) zamanda tamamlanir. Bu nedenle, if blogunun karmasikligi T(n) = 1'dir.
  
  max_element degiskeninin degeri, O(1) zamanda guncellenir.
  
  return ifadesi, O(1) zamanda tamamlanir.
  
  Dolayisiyla, toplam zaman karmasikligi T(n) = n * 1 = n'dir.
  
  Sonuc olarak, bu linear search algoritmasi kullanarak yazilan find_max fonksiyonunun zaman karmasikligi, O(n) veya T(n) = n'dir.
  
  (linear search)
  sonuc:
  Durum/Zaman Karmasikligi
  Best Case	O(1)
  Average Case	O(n)
  Worst Case	O(n)
  
  */
}


function brute_force(arr) {
  let n = arr.length;// atama oldugu icin islem degeri = 1
  let max_element = arr[0];// atama oldugu icin islem degeri = 1
  for (let i = 0; i < n; i++) {// dongu n kere tekrarlandigi icin islem degeri =  n
    for (let j = i + 1; j < n; j++) {//T(n) = (n-1) + (n-2) + ... + 1 = n(n-1)/2
      if (arr[j] > max_element) {//islem degeri = 1
        max_element = arr[j];//islem degeri = 1
      }
    }
  }
  return max_element;//islem degeri = 1

  /*
sonuc:
(brute force)
Durum/Zaman Karmasikligi
Best Case	O(n)
Average Case	O(n^2)
Worst Case	O(n^2)
  */
}



/*
  Quick sort algoritmasinin T(n) gosterimi,
n elemanli bir dizinin siralanmasi icin harcanan zamanin matematiksel ifadesidir.
Bu ifade, pivot elemaninin secimine, dizinin boyutuna ve dizi elemanlarinin ozelliklerine baglidir.

  Quick sort algoritmasinin O(n) tablosu, siralanacak verilerin boyutuna gore degisebilir.
Ancak, genel olarak Quick sort, O(n log n) karmasikligina sahiptir.
Bu karmasiklik, dizinin boyutuna gore logaritmik artis gosterir ve n elemanli bir dizi icin O(n log n) zaman alir.

  Ornegin, bir dizinin boyutu 1000 olsun.
Quick sort, bu diziyi siralamak icin O(1000 log 1000) = O(1000 x 3) = O(3000) zaman alir.
Bu, büyük veri setleri icin oldukca hizli bir siralama algoritmasidir.
  */

function quick_sort(arr) {
  let n = arr.length;
  if (n <= 1) {//islem degeri = 1
    return arr;
  }
  else { //islem degeri = 1
    let pivot = arr[0]; //islem degeri = 1
    let left = []; // islem degeri = 1
    let right = []; // islem degeri = 1
    for (let i = 1; i < arr.length; i++) { //for dongusu n kere donecegi icin = n
      if (arr[i] < pivot) {// islem degeri = 1
        left.push(arr[i]); // islem degeri = 1
      } else {// islem degeri = 1
        right.push(arr[i]); // islem degeri = 1
      }
    }
    return quick_sort(left).concat([pivot], quick_sort(right)); // O(log n)
  }
  //Quick Sort'un ortalama zaman karmasikligi O(n*log n)'dir
}

/*
sonuc:
(quick sort)
Durum/Zaman Karmasikligi
Worst case O(n^2)
Average case O(n log n)
Best case O(n log n)
*/


function brute_force_sort(arr) {
  for (let i = 0; i < arr.length; i++) {// dongu n kere tekrarlandigi icin islem degeri =  n
    for (let j = i + 1; j < arr.length; j++) {//T(n) = (n-1) + (n-2) + ... + 1 = n(n-1)/2
      if (arr[j] < arr[i]) {//islem degeri = 1
        [arr[i], arr[j]] = [arr[j], arr[i]];//islem degeri = 1
      }
    }
  }
  return arr;//islem degeri = 1
/*
sonuc:
(brute force)
Durum/Zaman Karmasikligi
Best Case	O(n)
Average Case	O(n^2)
Worst Case	O(n^2)

*/
}


function run() {
  let arr = diziOlustur();

  let start = new Date().getTime();
  let linearSearchResult = linear_search(arr);
  let end = new Date().getTime();
  let linearSearchTime = end - start;

  start = new Date().getTime();
  let bruteForceResult = brute_force(arr);
  end = new Date().getTime();
  let bruteForceTime = end - start;

  start = new Date().getTime();
  quick_sort(arr);
  end = new Date().getTime();
  let quick_sortTime = end - start;

  start = new Date().getTime();
  brute_force_sort(arr);
  end = new Date().getTime();
  let brute_force_sortTime = end - start;


  alert("Linear Search Sonucu: " + linearSearchResult + "\n" + "Linear Search Süresi: " + linearSearchTime + "ms" + "\n" + "Brute Force Sonucu: " + bruteForceResult + "\n" + "Brute Force Süresi: " + bruteForceTime + "ms" + "\n\n\n" + "Quick sort süresi: " + quick_sortTime + "ms" + "\n" + "Brute force sort süresi:" + brute_force_sortTime + "ms");
  console.log("Linear Search Sonucu: " + linearSearchResult);
  console.log("Linear Search Süresi: " + linearSearchTime + "ms");
  console.log("Brute Force Sonucu: " + bruteForceResult);
  console.log("Brute Force Süresi: " + bruteForceTime + "ms");
  console.log("Quick sort süresi: " + quick_sortTime + "ms");
  console.log("Brute force sort süresi:" + brute_force_sortTime + "ms");
}