function addBinary(a: string, b: string): string {
  let startPointerA = a.length -1;
      let startPointerB = b.length -1;
      let resultArr: number[] = []
      let temp = 0
      while (startPointerA >=0 && startPointerB >=0) {
          let add = 0;
          if (temp >= 1) {
              temp = 0;
              add = 1;
          }

          let res = Number(a[startPointerA]) + Number(b[startPointerB]) + add
          let mod :number = res % 2;
          let div = res / 2
          if (div >=0.6) {
              temp = 1;
          }

          resultArr.unshift(mod);
          --startPointerA;
          --startPointerB;
      }

      if (startPointerA >= 0) {
          while (startPointerA >=0 ) {
              let add = 0;
              if (temp >= 1) {
                  temp = 0;
                  add = 1;
              }
              let res = Number(a[startPointerA]) + add
              let mod = res % 2;
              let div = res / 2
              if (div >=0.6) {
                  temp = 1;
              }
              resultArr.unshift(mod);
              --startPointerA;
          }
      } else {
          while (startPointerB >=0 ) {
              let add = 0;
              if (temp >= 1) {
                  temp = 0;
                  add = 1;
              }
              let res = Number(b[startPointerB]) + add
              let mod = res % 2;
              let div = res / 2
              if (div >=0.6) {
                  temp = 1;
              }
              resultArr.unshift(mod);
              --startPointerB;
          }
      }

      if (temp>0) {
          resultArr.unshift(1);
      }

      return resultArr.join('');
};