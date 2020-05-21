import { Dice } from './Dice';
import { DiceType} from './DiceType';
import { DiceSet} from './DiceSet';

export class Rules {
  private DiceSets = new Array<DiceSet>();
  public currentDiceSet: DiceSet;
  private DLT: DiceType[];

  public constructor() {
    // list of dice definition, used by all levels
    this.DLT = [
      new DiceType('0', 'blue', 'red', 'teal', false, false, false, false ),
      new DiceType('1', 'green', 'red', 'white', false, false, false, false ),
      new DiceType('2', 'red', 'black', 'none', false, true, false, false ),
      new DiceType('3', 'red', 'black', 'purple', false, false, false, false ),
      new DiceType('4', 'blue', 'red', 'marble', false, false, true, false ),
      new DiceType('5', 'red', 'green', 'wood', true, false, false, false ),
      new DiceType('6', 'red', 'green', 'wood', false, false, false, false ),
      new DiceType('7', 'blue', 'red', 'marble', false, false, false, false ),
      new DiceType('8', 'white', 'red', 'marble', false, false, false, false ),
      new DiceType('9', 'green', 'red', 'red', false, false, false, false ),
      new DiceType('10', 'green', 'red', 'green', false, false, false, false ),
      new DiceType('11', 'blue', 'red', 'green', false, true, false, false ),
      new DiceType('12', 'blue', 'red', 'wood', false, false, false, false ),
      new DiceType('13', 'blue', 'white', 'teal', false, false, false, false ),
      new DiceType('14', 'green', 'white', 'blue', false, false, false, false ),
      new DiceType('15', 'white', 'red', 'blue', false, false, false, false ),
      new DiceType('16', 'green', 'white', 'blue', false, false, false, true ),
      new DiceType('17', 'green', 'red', 'marble', false, false, false, true ),
      new DiceType('18', 'red', 'green', 'green', false, false, false, true ),
      new DiceType('19', 'red', 'black', 'marble', false, false, false, true ),
      new DiceType('20', 'blue', 'white', 'red', false, false, false, true ),
      new DiceType('21', 'blue', 'red', 'marble', false, false, false, true ),
      new DiceType('22', 'white', 'black', 'marble', false, false, false, false ),
      new DiceType('23', 'white', 'green', 'white', false, false, false, false ),
      new DiceType('24', 'green', 'white', 'white', false, false, false, false ),
      new DiceType('25', 'blue', 'white', 'white', false, false, false, false ),
      new DiceType('26', 'red', 'green', 'white', false, false, false, false ),
      new DiceType('27', 'blue', 'white', 'gray', true, false, false, false ),
      new DiceType('28', 'green', 'mix', 'blue', false, false, false, false ),
      new DiceType('29', 'white', 'mix', 'blue', false, false, false, false ),
      new DiceType('30', 'red', 'black', 'teal', false, false, false, false ),
      new DiceType('31', 'white', 'green', 'white', false, false, true, false ),
      new DiceType('32', 'red', 'green', 'white', false, false, true, false ),
      new DiceType('33', 'green', 'white', 'blue', false, false, true, false ),
      new DiceType('34', 'blue', 'mix', 'white', false, false, false, false ),
      new DiceType('35', 'red', 'green', 'green', false, false, false, false ),
      new DiceType('36', 'red', 'mix', 'green', false, false, false, false ),
      new DiceType('37', 'white', 'green', 'blue', false, false, false, true ),
    ];
    this.SetDiceSets();
  }

  public SetDiceSets(){
    // dice set and rule index
    this.DiceSets.push(new DiceSet(1, this.DLT[0], this.DLT[1] ));
    this.DiceSets.push(new DiceSet(2, this.DLT[25], this.DLT[25] ));
    this.DiceSets.push(new DiceSet(3, this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(4, this.DLT[14], this.DLT[14] ));
    this.DiceSets.push(new DiceSet(5, this.DLT[24], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(6, this.DLT[7], this.DLT[9] ));
    this.DiceSets.push(new DiceSet(7, this.DLT[24], this.DLT[25] ));
    this.DiceSets.push(new DiceSet(8, this.DLT[4], this.DLT[25] ));
    this.DiceSets.push(new DiceSet(9, this.DLT[1], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(10, this.DLT[25], this.DLT[27] ));
    this.DiceSets.push(new DiceSet(11, this.DLT[0], this.DLT[1], this.DLT[2]));
    this.DiceSets.push(new DiceSet(12, this.DLT[1], this.DLT[3], this.DLT[4]));
    this.DiceSets.push(new DiceSet(13, this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(14, this.DLT[0], this.DLT[0], this.DLT[6]));
    this.DiceSets.push(new DiceSet(15, this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(16, this.DLT[6], this.DLT[6], this.DLT[6]));
    this.DiceSets.push(new DiceSet(17, this.DLT[7], this.DLT[7], this.DLT[7]));
    this.DiceSets.push(new DiceSet(18, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(19, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(20, this.DLT[0], this.DLT[1], this.DLT[8]));

    this.DiceSets.push(new DiceSet(21, this.DLT[1], this.DLT[1], this.DLT[8]));
    this.DiceSets.push(new DiceSet(22, this.DLT[1], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(23, this.DLT[0], this.DLT[0], this.DLT[1]));
    this.DiceSets.push(new DiceSet(24, this.DLT[9], this.DLT[10], this.DLT[35]));
    this.DiceSets.push(new DiceSet(25, this.DLT[0], this.DLT[1], this.DLT[6]));
    this.DiceSets.push(new DiceSet(26, this.DLT[7], this.DLT[7], this.DLT[6]));
    this.DiceSets.push(new DiceSet(27, this.DLT[7], this.DLT[7], this.DLT[1]));
    this.DiceSets.push(new DiceSet(28, this.DLT[1], this.DLT[0], this.DLT[0]));
    this.DiceSets.push(new DiceSet(29, this.DLT[1], this.DLT[1], this.DLT[4]));
    this.DiceSets.push(new DiceSet(30, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(31, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(32, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(33, this.DLT[0], this.DLT[1]));
    this.DiceSets.push(new DiceSet(34, this.DLT[14], this.DLT[15], this.DLT[0],  ));
    this.DiceSets.push(new DiceSet(35, this.DLT[3], this.DLT[7], this.DLT[10] ));
    this.DiceSets.push(new DiceSet(36, this.DLT[31], this.DLT[31], this.DLT[33] ));
    this.DiceSets.push(new DiceSet(37, this.DLT[1], this.DLT[7], this.DLT[8] ));
    this.DiceSets.push(new DiceSet(38, this.DLT[4], this.DLT[7], this.DLT[13] ));
    this.DiceSets.push(new DiceSet(39, this.DLT[6], this.DLT[23], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(40, this.DLT[6], this.DLT[23], this.DLT[24] ));

    this.DiceSets.push(new DiceSet(41, this.DLT[1], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(42, this.DLT[1], this.DLT[3], this.DLT[4]));
    this.DiceSets.push(new DiceSet(43, this.DLT[0], this.DLT[1], this.DLT[11]));
    this.DiceSets.push(new DiceSet(44, this.DLT[0], this.DLT[0], this.DLT[3]));
    this.DiceSets.push(new DiceSet(45, this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(46, this.DLT[12], this.DLT[12], this.DLT[7]));
    this.DiceSets.push(new DiceSet(47, this.DLT[7], this.DLT[7], this.DLT[7]));
    this.DiceSets.push(new DiceSet(48, this.DLT[0], this.DLT[1], this.DLT[7]));
    this.DiceSets.push(new DiceSet(49, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(50, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[8], this.DLT[8]));
    this.DiceSets.push(new DiceSet(51, this.DLT[0], this.DLT[7], this.DLT[13]));
    this.DiceSets.push(new DiceSet(52, this.DLT[1], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(53, this.DLT[0], this.DLT[3], this.DLT[14]));
    this.DiceSets.push(new DiceSet(54, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(55, this.DLT[8], this.DLT[8], this.DLT[8]));
    this.DiceSets.push(new DiceSet(56, this.DLT[1], this.DLT[8], this.DLT[8]));
    this.DiceSets.push(new DiceSet(57, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(58, this.DLT[1], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(59, this.DLT[0], this.DLT[0], this.DLT[3]));
    this.DiceSets.push(new DiceSet(60, this.DLT[0], this.DLT[1], this.DLT[8]));

    this.DiceSets.push(new DiceSet(61, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(62, this.DLT[7], this.DLT[7], this.DLT[7]));
    this.DiceSets.push(new DiceSet(63, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(64, this.DLT[8], this.DLT[9], this.DLT[14], this.DLT[15] ));
    this.DiceSets.push(new DiceSet(65, this.DLT[1], this.DLT[7], this.DLT[8] ));
    this.DiceSets.push(new DiceSet(66, this.DLT[3], this.DLT[10], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(67, this.DLT[14], this.DLT[23], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(68, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(69, this.DLT[9], this.DLT[22], this.DLT[22], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(70, this.DLT[7], this.DLT[7], this.DLT[7], this.DLT[7], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(71, this.DLT[3], this.DLT[13], this.DLT[23], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(72, this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[31] ));
    this.DiceSets.push(new DiceSet(73, this.DLT[0], this.DLT[1], this.DLT[8], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(74, this.DLT[13], this.DLT[28], this.DLT[28] ));
    this.DiceSets.push(new DiceSet(75, this.DLT[9], this.DLT[9], this.DLT[13], this.DLT[13] ));
    this.DiceSets.push(new DiceSet(76, this.DLT[3], this.DLT[3], this.DLT[22], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(77, this.DLT[13], this.DLT[14], this.DLT[29] ));
    this.DiceSets.push(new DiceSet(78, this.DLT[9], this.DLT[27], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(79, this.DLT[7], this.DLT[7], this.DLT[14], this.DLT[14], this.DLT[23] ));
    this.DiceSets.push(new DiceSet(80, this.DLT[7], this.DLT[14], this.DLT[19], this.DLT[19] ));

    this.DiceSets.push(new DiceSet(81, this.DLT[0], this.DLT[1], this.DLT[32]));
    this.DiceSets.push(new DiceSet(82, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[23]));
    this.DiceSets.push(new DiceSet(83, this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(84, this.DLT[0], this.DLT[0], this.DLT[1]));
    this.DiceSets.push(new DiceSet(85, this.DLT[1], this.DLT[1], this.DLT[8]));
    this.DiceSets.push(new DiceSet(86, this.DLT[0], this.DLT[0], this.DLT[1]));
    this.DiceSets.push(new DiceSet(87, this.DLT[0], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(88, this.DLT[4], this.DLT[7], this.DLT[7]));
    this.DiceSets.push(new DiceSet(89, this.DLT[1], this.DLT[7], this.DLT[7]));
    this.DiceSets.push(new DiceSet(90, this.DLT[1], this.DLT[1], this.DLT[3]));
    this.DiceSets.push(new DiceSet(91, this.DLT[1], this.DLT[8], this.DLT[8], this.DLT[8]));
    this.DiceSets.push(new DiceSet(92, this.DLT[0], this.DLT[0], this.DLT[3]));
    this.DiceSets.push(new DiceSet(93, this.DLT[0], this.DLT[0], this.DLT[3]));
    this.DiceSets.push(new DiceSet(94, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(95, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[3], this.DLT[3]));
    this.DiceSets.push(new DiceSet(96, this.DLT[15], this.DLT[15], this.DLT[15], this.DLT[15]));
    this.DiceSets.push(new DiceSet(97, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[15]));
    this.DiceSets.push(new DiceSet(98, this.DLT[1], this.DLT[3], this.DLT[7], this.DLT[15]));
    this.DiceSets.push(new DiceSet(99, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(100, this.DLT[1], this.DLT[1], this.DLT[3], this.DLT[3]));

    this.DiceSets.push(new DiceSet(101, this.DLT[1], this.DLT[1], this.DLT[1], this.DLT[1], this.DLT[0]));
    this.DiceSets.push(new DiceSet(102, this.DLT[0], this.DLT[1], this.DLT[19]));
    this.DiceSets.push(new DiceSet(103, this.DLT[0], this.DLT[3], this.DLT[16]));
    this.DiceSets.push(new DiceSet(104, this.DLT[0], this.DLT[1], this.DLT[18]));
    this.DiceSets.push(new DiceSet(105, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[15] ));
    this.DiceSets.push(new DiceSet(106, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[15] ));
    this.DiceSets.push(new DiceSet(107, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(108, this.DLT[7], this.DLT[8], this.DLT[8], this.DLT[9] ));
    this.DiceSets.push(new DiceSet(109, this.DLT[1], this.DLT[6], this.DLT[8], this.DLT[8] ));
    this.DiceSets.push(new DiceSet(110, this.DLT[1], this.DLT[1], this.DLT[6], this.DLT[8] ));
    this.DiceSets.push(new DiceSet(111, this.DLT[14], this.DLT[22], this.DLT[28], this.DLT[29] ));
    this.DiceSets.push(new DiceSet(112, this.DLT[13], this.DLT[24], this.DLT[34], this.DLT[36] ));
    this.DiceSets.push(new DiceSet(113, this.DLT[3], this.DLT[24], this.DLT[24], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(114, this.DLT[8], this.DLT[12], this.DLT[13], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(115, this.DLT[28], this.DLT[28], this.DLT[28], this.DLT[28], this.DLT[28] ));
    this.DiceSets.push(new DiceSet(116, this.DLT[25], this.DLT[25], this.DLT[34], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(117, this.DLT[1], this.DLT[7], this.DLT[8], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(118, this.DLT[7], this.DLT[7], this.DLT[7], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(119, this.DLT[13], this.DLT[13], this.DLT[19], this.DLT[19] ));
    this.DiceSets.push(new DiceSet(120, this.DLT[29], this.DLT[29], this.DLT[29], this.DLT[29], this.DLT[34] ));

    this.DiceSets.push(new DiceSet(121, this.DLT[0], this.DLT[0], this.DLT[0], this.DLT[0]));
    this.DiceSets.push(new DiceSet(122, this.DLT[1], this.DLT[1], this.DLT[1], this.DLT[1]));
    this.DiceSets.push(new DiceSet(123, this.DLT[22], this.DLT[22], this.DLT[22], this.DLT[22]));
    this.DiceSets.push(new DiceSet(124, this.DLT[1], this.DLT[3], this.DLT[23], this.DLT[23]));
    this.DiceSets.push(new DiceSet(125, this.DLT[0], this.DLT[0], this.DLT[23], this.DLT[23]));
    this.DiceSets.push(new DiceSet(126, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[22]));
    this.DiceSets.push(new DiceSet(127, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[22]));
    this.DiceSets.push(new DiceSet(128, this.DLT[3], this.DLT[8], this.DLT[22], this.DLT[23]));
    this.DiceSets.push(new DiceSet(129, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[23]));
    this.DiceSets.push(new DiceSet(130, this.DLT[6], this.DLT[7], this.DLT[10], this.DLT[22]));
    this.DiceSets.push(new DiceSet(131, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[15]));
    this.DiceSets.push(new DiceSet(132, this.DLT[0], this.DLT[1], this.DLT[3], this.DLT[3], this.DLT[15]));
    this.DiceSets.push(new DiceSet(133, this.DLT[3], this.DLT[23], this.DLT[23], this.DLT[23], this.DLT[23]));
    this.DiceSets.push(new DiceSet(134, this.DLT[23], this.DLT[23], this.DLT[23], this.DLT[23], this.DLT[24]));
    this.DiceSets.push(new DiceSet(135, this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[24]));
    this.DiceSets.push(new DiceSet(136, this.DLT[0], this.DLT[4], this.DLT[7], this.DLT[13], this.DLT[25], this.DLT[24]));
    this.DiceSets.push(new DiceSet(137, this.DLT[0], this.DLT[1], this.DLT[23], this.DLT[19]));
    this.DiceSets.push(new DiceSet(138, this.DLT[0], this.DLT[1], this.DLT[23], this.DLT[16]));
    this.DiceSets.push(new DiceSet(139, this.DLT[26], this.DLT[28], this.DLT[29] ));
    this.DiceSets.push(new DiceSet(140, this.DLT[26], this.DLT[28], this.DLT[29] ));

    this.DiceSets.push(new DiceSet(141, this.DLT[26], this.DLT[28], this.DLT[29] ));
    this.DiceSets.push(new DiceSet(142, this.DLT[14], this.DLT[14], this.DLT[18], this.DLT[18] ));
    this.DiceSets.push(new DiceSet(143, this.DLT[7], this.DLT[7], this.DLT[37], this.DLT[37] ));
    this.DiceSets.push(new DiceSet(144, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[8], this.DLT[8] ));
    this.DiceSets.push(new DiceSet(145, this.DLT[0], this.DLT[0], this.DLT[1], this.DLT[1], this.DLT[32] ));
    this.DiceSets.push(new DiceSet(146, this.DLT[10], this.DLT[10], this.DLT[12], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(147, this.DLT[24], this.DLT[24], this.DLT[25], this.DLT[25], this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(148, this.DLT[23], this.DLT[24], this.DLT[25], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(149, this.DLT[0], this.DLT[1], this.DLT[30], this.DLT[32] ));
    this.DiceSets.push(new DiceSet(150, this.DLT[7], this.DLT[9], this.DLT[23], this.DLT[23], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(151, this.DLT[13], this.DLT[26], this.DLT[29], this.DLT[36] ));
    this.DiceSets.push(new DiceSet(152, this.DLT[10], this.DLT[23], this.DLT[28], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(153, this.DLT[8], this.DLT[8], this.DLT[14], this.DLT[14], this.DLT[25] ));
    this.DiceSets.push(new DiceSet(154, this.DLT[35], this.DLT[35], this.DLT[35], this.DLT[35], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(155, this.DLT[9], this.DLT[23], this.DLT[28], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(156, this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[33] ));
    this.DiceSets.push(new DiceSet(157, this.DLT[22], this.DLT[22], this.DLT[22], this.DLT[24], this.DLT[31] ));
    this.DiceSets.push(new DiceSet(158, this.DLT[0], this.DLT[6], this.DLT[11], this.DLT[24], this.DLT[31] ));
    this.DiceSets.push(new DiceSet(159, this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(160, this.DLT[6], this.DLT[23], this.DLT[28], this.DLT[34] ));

    this.DiceSets.push(new DiceSet(161, this.DLT[23], this.DLT[23], this.DLT[24], this.DLT[25], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(162, this.DLT[23], this.DLT[23], this.DLT[24], this.DLT[25], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(163, this.DLT[1], this.DLT[1], this.DLT[11], this.DLT[11], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(164, this.DLT[24], this.DLT[25], this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(165, this.DLT[24], this.DLT[25], this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(166, this.DLT[23], this.DLT[23], this.DLT[24], this.DLT[25], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(167, this.DLT[23], this.DLT[24], this.DLT[25], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(168, this.DLT[0], this.DLT[0], this.DLT[24], this.DLT[30], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(169, this.DLT[0], this.DLT[0], this.DLT[24], this.DLT[30], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(170, this.DLT[0], this.DLT[0], this.DLT[24], this.DLT[30], this.DLT[30] ));
    this.DiceSets.push(new DiceSet(171, this.DLT[23], this.DLT[23], this.DLT[23], this.DLT[23], this.DLT[31] ));
    this.DiceSets.push(new DiceSet(172, this.DLT[26], this.DLT[26], this.DLT[26], this.DLT[26], this.DLT[32] ));
    this.DiceSets.push(new DiceSet(173, this.DLT[26], this.DLT[26], this.DLT[26], this.DLT[26], this.DLT[32] ));
    this.DiceSets.push(new DiceSet(174, this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[33] ));
    this.DiceSets.push(new DiceSet(175, this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[33] ));
    this.DiceSets.push(new DiceSet(176, this.DLT[4], this.DLT[7], this.DLT[7], this.DLT[7], this.DLT[7] ));
    this.DiceSets.push(new DiceSet(177, this.DLT[4], this.DLT[7], this.DLT[7], this.DLT[7], this.DLT[7] ));
    this.DiceSets.push(new DiceSet(178, this.DLT[16], this.DLT[16], this.DLT[22], this.DLT[7], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(179, this.DLT[16], this.DLT[16], this.DLT[22], this.DLT[7], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(180, this.DLT[25], this.DLT[25], this.DLT[25], this.DLT[26], this.DLT[26] ));

    this.DiceSets.push(new DiceSet(181, this.DLT[25], this.DLT[25], this.DLT[25], this.DLT[34], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(182, this.DLT[7], this.DLT[7], this.DLT[9], this.DLT[9], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(183, this.DLT[7], this.DLT[7], this.DLT[9], this.DLT[9], this.DLT[22] ));
    this.DiceSets.push(new DiceSet(184, this.DLT[1], this.DLT[28], this.DLT[29], this.DLT[34], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(185, this.DLT[0], this.DLT[9], this.DLT[9], this.DLT[21], this.DLT[21] ));
    this.DiceSets.push(new DiceSet(186, this.DLT[15], this.DLT[22], this.DLT[28], this.DLT[29], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(187, this.DLT[29], this.DLT[29], this.DLT[34], this.DLT[34], this.DLT[36] ));
    this.DiceSets.push(new DiceSet(188, this.DLT[25], this.DLT[25], this.DLT[32], this.DLT[35], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(189, this.DLT[12], this.DLT[22], this.DLT[22], this.DLT[24], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(190, this.DLT[3], this.DLT[3], this.DLT[17], this.DLT[17], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(191, this.DLT[7], this.DLT[22], this.DLT[24], this.DLT[24], this.DLT[24] ));
    this.DiceSets.push(new DiceSet(192, this.DLT[14], this.DLT[14], this.DLT[14], this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(193, this.DLT[24], this.DLT[25], this.DLT[25], this.DLT[35], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(194, this.DLT[14], this.DLT[23], this.DLT[28], this.DLT[34], this.DLT[3] ));
    this.DiceSets.push(new DiceSet(195, this.DLT[1], this.DLT[13], this.DLT[32], this.DLT[1] ));
    this.DiceSets.push(new DiceSet(196, this.DLT[28], this.DLT[28], this.DLT[29], this.DLT[34], this.DLT[35] ));
    this.DiceSets.push(new DiceSet(197, this.DLT[13], this.DLT[14], this.DLT[26], this.DLT[28], this.DLT[34] ));
    this.DiceSets.push(new DiceSet(198, this.DLT[24], this.DLT[24], this.DLT[24], this.DLT[26], this.DLT[26] ));
    this.DiceSets.push(new DiceSet(199, this.DLT[31], this.DLT[36], this.DLT[23], this.DLT[23], this.DLT[23] ));
    this.DiceSets.push(new DiceSet(200, this.DLT[13], this.DLT[23], this.DLT[24], this.DLT[26], this.DLT[26] ));
  }

  public resetRuleStatus(){
    for(const diceSet of this.DiceSets) { diceSet.used = false; }
  }

  public getRuleNum(){
    return this.currentDiceSet.ruleID;
  }

  public setNewRule(level: number){
    if(level < 1){ level = 1; }
    if(level > 10){ level = 10; }
    let minindex = 0;
    let maxindex = this.DiceSets.length-1;
    switch(level){
      case 1:
        maxindex = 19;
        break;
      case 2:
        minindex = 20;
        maxindex = 39;
        break;
      case 3:
        minindex = 40;
        maxindex = 59;
        break;
      case 4:
        minindex = 60;
        maxindex = 79;
        break;
      case 5:
        minindex = 80;
        maxindex = 99;
        break;
      case 6:
        minindex = 100;
        maxindex = 119;
        break;
      case 7:
        minindex = 120;
        maxindex = 139;
        break;
      case 8:
        minindex = 140;
        maxindex = 159;
        break;
      case 9:
        minindex = 160;
        maxindex = 179;
        break;
      case 10:
        minindex = maxindex - 20;
        break;
    }

    if(maxindex >= this.DiceSets.length-1 ) { maxindex = this.DiceSets.length-1;}
    let index = this.randN(minindex, maxindex);
    while( this.DiceSets[index].getDices().length < 2 || this.DiceSets[index].used){
      index = this.randN(minindex, maxindex);
    }
   // index = 9;
    this.currentDiceSet = this.DiceSets[index];
    this.DiceSets[index].used = true;
  }

  public getDices() {
    return this.currentDiceSet.getDices();
  }

  public getDiceSetPoints(dices: Dice[]){
    switch(this.currentDiceSet.ruleID){
      case 1:
        return this.difference(dices);
      case 2:
        return this.count_evens(dices);
      case 3:
        return this.count_odds(dices);
      case 4:
        return this.times_top_N(dices, 2);
      case 5:
        return this.ignore_afacecolor(dices, 'red');
      case 6:
        return this.double_afacecolor(dices, 'green');
      case 7:
        return this.times_or_add_whichislarger(dices, 2);
      case 8:
        return this.double_long(dices);
      case 9:
        return this.plus_minus_N(dices, 2);
      case 10:
        return this.max_number(dices, 6);
      case 11:
        return this.ignore_sharp(dices);
      case 12:
        return this.ignore_long(dices);
      case 13:
        return this.minus_afacecolor(dices, 'blue');
      case 14:
        return this.times_then_minus(dices, 'red');
      case 15:
        return this.ignore_afacecolor(dices, 'blue');
      case 16:
        return this.count_odds(dices);
      case 17:
        return this.count_evens(dices);
      case 18:
        return this.count_top_one(dices);
      case 19:
        return this.count_top_two(dices);
      case 20:
        return this.count_afacecolor(dices, 'green');
      case 21:
        return this.double_afacecolor(dices, 'white');
      case 22:
        return this.count_top_even(dices);
      case 23:
        return this.double_afacecolor(dices, 'green');
      case 24:
        return this.count_aEdgecolor(dices, 'green');
      case 25:
        return this.count_afacecolor_ifeven(dices, 'red');
      case 26:
        return this.plus_minus_if_even_odd(dices, true, 'red');
      case 27:
        return this.double_others_ifafacecolor_even(dices, 'green');
      case 28:
        return this.count_if_afacecolor_haspair(dices, 'blue');
      case 29:
        return this.count_long_ifeven(dices);
      case 30:
        return this.count_evens(dices);
      case 31:
        return this.count_afacecolor(dices, 'green');
      case 32:
        return this.count_afacecolor(dices, 'blue');
      case 33:
        return this.times_top_N(dices, 2);
      case 34:
        return this.count_aEdgecolor(dices, 'blue');
      case 35:
        return this.minus_afacecolor(dices, 'red');
      case 36:
        return this.minus(dices, 2);
      case 37:
        return this.plus_minus_if_more_less(dices, 4, false, 'white');
      case 38:
        return this.count_long_ifeven(dices);
      case 39:
        return this.double_afacecolor(dices, 'green', 'red');
      case 40:
        return this.times_or_add_whichislarger(dices, 2, 'red');
      case 41:
        return this.times_then_minus(dices, 'red');
      case 42:
        return this.double_long(dices);
      case 43:
        return this.ignore_sharp(dices);
      case 44:
        return this.count_afacecolor_ifeven(dices, 'red');
      case 45:
        return this.double_afacecolor(dices, 'blue');
      case 46:
        return this.count_aEdge_ifeven(dices, 'marble');
      case 47:
        return this.count_top_two(dices);
      case 48:
        return this.count_evens(dices);
      case 49:
        return this.count_odds(dices);
      case 50:
        return this.count_number_of_oddsevens(dices, true);
      case 51:
        return this.double_aEdge(dices, 'marble');
      case 52:
        return this.largest_poker_rule(dices);
      case 53:
        return this.times_if_add_if_moreorless(dices, 3, 'red', true);
      case 54:
        return this.double_afacecolor(dices, 'green');
      case 55:
        return this.largest_poker_rule(dices);
      case 56:
        return this.double_others_ifafacecolor_even(dices, 'green');
      case 57:
        return this.double_others_ifafacecolor_even(dices, 'red');
      case 58:
        return this.minus_afacecolor(dices, 'red');
      case 59:
        return this.largest_poker_rule(dices, 'red');
      case 60:
        return this.largest_poker_rule(dices);
      case 61:
        return this.minus(dices, 2);
      case 62:
          return this.minus(dices, 5);
      case 63:
        return this.plus_minus_if_even_odd(dices, true, 'red');
      case 64:
        return this.count_aEdgecolor(dices, 'blue');
      case 65:
        return this.plus_minus_index_if_more_less(dices, 3, true, 'white');
      case 66:
        return this.count_afacecolor_ifmorethan(dices, 'red', 3);
      case 67:
        return this.plus_minus_index_if_even_odd(dices, true, 'red');
      case 68:
        return this.count_evens(dices, 'white');
      case 69:
        return this.count_number_of_compareto(dices, 'green', true);
      case 70:
        return this.count_number_of_compareto(dices, 'red', false);
      case 71:
        return this.count_top_two(dices, 'red');
      case 72:
        return this.count_afacecolor_if_others_moreorless(dices, 'white', 9, false);
      case 73:
        return this.count_oddsevens_if_oddeven(dices, 'red', true);
      case 74:
        return this.count_top_one(dices, 'blue');
      case 75:
        return this.times_add_of_larger(dices, 'blue', 'green', true);
      case 76:
        return this.times_top_N(dices, 2);
      case 77:
        return this.mix_double_or_add_extra(dices, true);
      case 78:
        return this.max_number(dices, 11);
      case 79:
        return this.top_timesoradd_top_if_evenorodd(dices, 'blue', 'green', true, 'white');
      case 80:
        return this.nullface_plus_minus_zero(dices, 3);
      case 81:
        return this.max_number(dices, 9);
      case 82:
         return this.max_number(dices, 12);
      case 83:
          return this.count_afacecolor_ifmorethan(dices, 'blue', 3);
      case 84:
        return this.count_afacecolor_iflessthan(dices, 'green', 4);
      case 85:
        return this.count_afacecolor_ifeven(dices, 'white');
      case 86:
        return this.add_then_times(dices, 'blue', 'green');
      case 87:
        return this.times_top_N(dices, 2);
      case 88:
        return this.double_long(dices);
      case 89:
        return this.times_if_add_if_oddoreven(dices, 'green', true);
      case 90:
        return this.times_if_add_if_oddoreven(dices, 'red', false);
      case 91:
        return this.times_add_of_larger(dices, 'white', 'green', false);
      case 92:
        return this.times_if_add_if_moreorless(dices, 4, 'red', false);
      case 93:
        return this.times_if_add_if_moreorless(dices, 3, 'red', true);
      case 94:
        return this.times_add_of_larger(dices, 'green', 'blue', false);
      case 95:
        return this.count_number_of_pairs(dices, 'green', 'red', 'blue');
      case 96:
        return this.largest_poker_rule(dices);
      case 97:
        return this.largest_poker_rule(dices);
      case 98:
        return this.times_then_add(dices,'red', 'green', 'blue', 'white');
      case 99:
        return this.times_then_add_ifpair(dices,'green', 'blue');
      case 100:
        return this.times_add_of_larger(dices,'green', 'red', false);
      case 101:
        return this.count_top_two(dices, 'blue');
      case 102:
        return this.nullface_plus_minus_zero(dices, -3);
      case 103:
        return this.nullface_plus_minus_zero(dices, 3);
      case 104:
        return this.nullface_plus_minus_zero(dices, 0);
      case 105:
        return this.times_add_of_larger(dices, 'blue', 'green', false, 'white');
      case 106:
        return this.top_timesoradd_top_if_evenorodd(dices, 'blue', 'green', true, 'white');
      case 107:
        return this.top_timesadd_top_if_lessormore(dices, 'blue', 'green', false, 4, 'red');
      case 108:
        return this.max_number(dices, 12);
      case 109:
        return this.round_multiple_N(dices, 5);
      case 110:
        return this.max_number(dices, 9, 'red');
      case 111:
        return this.count_black_dots(dices);
      case 112:
        return this.count_white_dots(dices);
      case 113:
        return this.count_if_moreless_than_index(dices, true, 'red');
      case 114:
        return this.minus(dices, 4);
      case 115:
        return this.count_number_of_oddsevens(dices, true);
      case 116:
        return this.mix_double_or_add_extra(dices, true);
      case 117:
        return this.remainder_of_N(dices, 10);
      case 118:
        return this.count_number_of_compareto(dices, 'red', false);
      case 119:
        return this.nullface_as_maxmin(dices, 'blue', true);
      case 120:
        return this.count_odds(dices, 'blue');
      case 121:
        return this.max_number(dices,13);
      case 122:
        return this.minus(dices, 4);
      case 123:
        return this.round_multiple_N(dices, 5);
      case 124:
        return this.times_if_add_if_moreorless(dices, 5, 'white', false);
      case 125:
        return this.times_if_add_if_oddoreven(dices, 'white', false);
      case 126:
        return this.times_if_add_if_oddoreven(dices,'white',false,'red');
      case 127:
        return this.times_if_add_if_moreorless(dices, 3, 'white', true, 'red');
      case 128:
        return this.max_number(dices, 12, 'red');
      case 129:
        return this.count_oddsevens_if_oddeven(dices, 'red', true);
      case 130:
        return this.count_oddsevens_if_oddeven(dices, 'white', true);
      case 131:
        return this.count_evens(dices, 'red');
      case 132:
        return this.count_odds(dices, 'red');
      case 133:
        return this.count_number_of_compareto(dices,'red', true);
      case 134:
        return this.count_number_of_compareto(dices, 'green', false);
      case 135:
        return this.count_number_of_oddsevens(dices, true);
      case 136:
        return this.count_number_of_oddsevens(dices, false);
      case 137:
        return this.nullface_plus_minus_zero(dices, -4);
      case 138:
          return this.nullface_plus_minus_zero(dices, +3);
      case 139:
        return this.mix_double_or_add_extra(dices, true, 0, 'red');
      case 140:
        return this.mix_double_or_add_extra(dices, false, 2, 'red');
      case 141:
        return this.mix_double_or_add_extra(dices, false, 1);
      case 142:
        return this.nullface_as_maxmin(dices, 'green', true);
      case 143:
        return this.nullface_as_maxmin(dices, 'blue', false);
      case 144:
        return this.top_timesadd_top_if_lessormore(dices, 'blue', 'white', true, 3, 'green');
      case 145:
        return this.top_timesoradd_top_if_evenorodd(dices, 'blue', 'green', true, 'red');
      case 146:
        return this.count_afacecolor_ifmorethan(dices, 'red', 3);
      case 147:
        return this.count_top1_of_colors(dices, 'red', 'blue', 'green');
      case 148:
        return this.count_afacecolor_if_others_moreorless(dices, 'red', 9, false);
      case 149:
        return this.remainder_of_N(dices, 10);
      case 150:
        return this.largest_poker_rule(dices);
      case 151:
        return this.count_green_dots(dices);
      case 152:
        return this.count_red_dots(dices);
      case 153:
        return this.count_evens(dices, 'blue');
      case 154:
        return this.largest_poker_rule(dices);
      case 155:
        return this.mix_double_or_add_extra(dices, false, 1);
      case 156:
        return this.count_oddsevens_if_longoddeven(dices, true, false);
      case 157:
        return this.count_oddsevens_if_moreless(dices, 4, false, 'green', 'none', true);
      case 158:
        return this.max_number(dices, 10, 'none', true, true);
      case 159:
        return this.round_multiple_N(dices, 5, 'blue');
      case 160:
        return this.mix_double_or_add_extra(dices, false, 2, 'red');
      case 161:
        return this.count_afacecolor_if_others_moreorless(dices, 'red', 13, false );
      case 162:
        return this.max_number(dices, 13, 'red' );
      case 163:
        return this.count_odds(dices, 'red' );
      case 164:
        return this.times_if_add_if_moreorless(dices, 6, 'red', false );
      case 165:
        return this.times_if_add_if_oddoreven(dices, 'red', true );
      case 166:
        return this.times_if_add_if_oddoreven(dices, 'white', false, 'red' );
      case 167:
        return this.count_oddsevens_if_oddeven(dices, 'red', true, 'red' );
      case 168:
        return this.count_oddsevens_if_oddeven(dices, 'green', true );
      case 169:
        return this.top_timesadd_top_if_lessormore(dices, 'blue', 'red', false, 4, 'green' );
      case 170:
        return this.top_timesoradd_top_if_evenorodd(dices, 'blue', 'red', true, 'green' );
      case 171:
        return this.count_oddsevens_if_longoddeven(dices, false, true);
      case 172:
        return this.largest_poker_rule(dices);
      case 173:
        return this.count_oddsevens_if_longoddeven(dices, true, false);
      case 174:
        return this.count_if_lessormore_than_long(dices, false, true);
      case 175:
        return this.count_if_lessormore_than_long(dices, true, false);
      case 176:
        return this.count_number_of_compareto_long(dices, false);
      case 177:
        return this.count_number_of_compareto_long(dices, true);
      case 178:
        return this.nullface_plus_minus_zero(dices, -2, 'red');
      case 179:
        return this.nullface_max(dices, 12);
      case 180:
        return this.minus_afacecolor(dices, 'red');
      case 181:
        return this.largest_poker_rule(dices);
      case 182:
        return this.top_timesoradd_top_if_evenorodd(dices,'blue', 'green', true, 'white');
      case 183:
        return this.top_timesadd_top_if_lessormore(dices, 'blue', 'green', false, 4, 'white');
      case 184:
        return this.mix_double_or_add_extra(dices, false, -1, 'red');
      case 185:
        return this.nullface_as_maxmin(dices, 'green', true );
      case 186:
        return this.count_red_dots(dices );
      case 187:
        return this.remainder_of_N(dices, 10 );
      case 188:
        return this.largest_poker_rule(dices, 'none', true );
      case 189:
        return this.largest_poker_rule(dices, 'blue' );
      case 190:
        return this.nullface_as_maxmin(dices, 'red', true, 'red' );
      case 191:
        return this.top_plusminus_top_if_oddeven(dices, 'blue', 'green', true, 'white' );
      case 192:
        return this.minus_afacecolor(dices, 'red' );
      case 193:
        return this.top_plusminus_top_if_moreless(dices, 'red', 'blue', false, 4, 'green' );
      case 194:
        return this.count_bigsmall_if_bigsmall(dices, 'red', true, 'white' );
      case 195:
        return this.count_afacecolor_if_others_moreorless(dices, 'red', 9, false );
      case 196:
        return this.largest_poker_rule(dices, 'red' );
      case 197:
        return this.max_number(dices, 9, 'none', false, false, 'mix' );
      case 198:
        return this.minus_afacecolor(dices, 'red' );
      case 199:
        return this.count_oddsevens_if_moreless(dices, 3, true, 'red', 'none', true );
      case 200:
        return this.count_bigsmall_if_bigsmall(dices, 'green', true, 'white' );
      default:
        return this.count_all(dices);
    }
  }

  private count_all(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private remainder_of_N(dices: Dice[], N: number, excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      points += dice.getTopFaceValue();
    }
    return points % N;
  }

  private plus_minus_N(dices: Dice[], n: number): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      points += dice.getTopFaceValue();
    }
    return points + n;
  }

  private difference(dices: Dice[], excludecolor: string = 'none'): number {
    const values = [];
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === excludecolor ) { continue; }
      values.push(dice.getTopFaceValue());
    }
    return Math.abs(values[0] - values[1]);
  }

  private times_or_add_whichislarger(dices: Dice[], n: number, excludecolor: string = 'none'): number {
    const values = [];
    if(dices.length < n) { return 0; }
    for( const dice of dices) {
     if(dice.faceColor !== excludecolor) {
       values.push(dice.getTopFaceValue());
     }
    }
    let tv = 1;
    let av = 0;
    for(let i=0; i<n; i++){
      tv *= values[i];
      av += values[i];
    }
    return tv > av ? tv : av;
  }

  private times_then_minus(dices: Dice[], color: string): number {
    const values = [];
    let vc = 0;
    if(dices.length !== 3) { return 0; }
    for( const dice of dices) {
     if(dice.faceColor === color) {
       vc = dice.getTopFaceValue();
     } else {
      values.push(dice.getTopFaceValue());
     }
    }
    const rst = values[0] * values[1] - vc;
    return rst > 0 ? rst : 0;
  }

  private ignore_sharp(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.sharp ) { continue; }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private ignore_long(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.long ) { continue; }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private ignore_afacecolor(dices: Dice[], color: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) { continue; }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private count_odds(dices: Dice[], excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.getTopFaceValue()%2 === 0 || dice.faceColor === excludecolor ) { continue; }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private count_evens(dices: Dice[], excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.getTopFaceValue()%2 === 1 || dice.faceColor === excludecolor ) { continue; }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private count_top_one(dices: Dice[], excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      if( dice.getTopFaceValue() > points ) {
         points = dice.getTopFaceValue();
        }
    }
    return points;
  }

  private count_top1_of_colors(dices: Dice[], color1: string, color2: string, color3: string = 'none' ): number {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    if(dices.length < 4) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color1) {
         if(dice.getTopFaceValue() > p1) { p1 = dice.getTopFaceValue(); }
        }
      if(dice.faceColor === color2) {
        if(dice.getTopFaceValue() > p2) { p2 = dice.getTopFaceValue(); }
       }
      if(dice.faceColor === color3) {
        if(dice.getTopFaceValue() > p3) { p3 = dice.getTopFaceValue(); }
       }
    }
    return p1 + p2 + p3;
  }

  private count_top_two(dices: Dice[], excludecolor: string = 'none'): number {
    const vals = [];
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      vals.push(dice.getTopFaceValue());
    }
    vals.sort( (a,b) => b - a );
    return vals[0] + vals[1];
  }

  private count_black_dots(dices: Dice[] ): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.dotColor === 'black' ) {
         points += dice.getTopFaceValue();
       }
      if(dice.dotColor === 'mix' && dice.faceColor === 'blue') {
        if(dice.getTopFaceValue() === 1 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'green') {
        if(dice.getTopFaceValue() === 1 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'red') {
        if(dice.getTopFaceValue() === 1 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'white') {
        if(dice.getTopFaceValue() === 1 || dice.getTopFaceValue() === 5) {
          points += 1;
        }
        if(dice.getTopFaceValue() === 6) {
          points += 2;
        } 
      }
    }
    return points;
  }

  private count_white_dots(dices: Dice[] ): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.dotColor === 'white' ) {
         points += dice.getTopFaceValue();
       }
      if(dice.dotColor === 'mix' && dice.faceColor === 'blue') {
        if(dice.getTopFaceValue() === 5 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'green') {
        if(dice.getTopFaceValue() === 5 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'red') {
        if(dice.getTopFaceValue() === 5 || dice.getTopFaceValue() === 6) {
          points += 1;
        }
      }
    }
    return points;
  }

  private count_green_dots(dices: Dice[] ): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.dotColor === 'green' ) {
         points += dice.getTopFaceValue();
       }
      if(dice.dotColor === 'mix' && dice.faceColor === 'blue') {
        if(dice.getTopFaceValue() === 2 || dice.getTopFaceValue() === 3) { points += 1; }
        if(dice.getTopFaceValue() > 3 ) { points += 2; }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'white') {
        if(dice.getTopFaceValue() === 2 || dice.getTopFaceValue() === 3) { points += 1; }
        if(dice.getTopFaceValue() > 3 ) { points += 2; }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'red') {
        if(dice.getTopFaceValue() === 2 ) { points += 1; }
        if(dice.getTopFaceValue() > 2 ) { points += 2; }
      }
    }
    return points;
  }

  private count_red_dots(dices: Dice[] ): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.dotColor === 'red' ) {
         points += dice.getTopFaceValue();
       }
      if(dice.dotColor === 'mix' && dice.faceColor === 'blue') {
        if(dice.getTopFaceValue() === 2 ) { points += 1; }
        if(dice.getTopFaceValue() > 2 ) { points += 2; }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'white') {
        if(dice.getTopFaceValue() === 2 ) { points += 1; }
        if(dice.getTopFaceValue() > 2 ) { points += 2; }
      }
      if(dice.dotColor === 'mix' && dice.faceColor === 'green') {
        if(dice.getTopFaceValue() === 2 || dice.getTopFaceValue() === 3 ) { points += 1; }
        if(dice.getTopFaceValue() > 2 ) { points += 2; }
      }
    }
    return points;
  }

  private double_afacecolor(dices: Dice[], color: string, excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === excludecolor ) { continue; }
      if( dice.faceColor === color ) { points += dice.getTopFaceValue(); }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private count_top_even(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.getTopFaceValue()%2 === 1 ) { continue; }
      if( dice.getTopFaceValue() > points ) {
        points = dice.getTopFaceValue();
      }
    }
    return points;
  }

  private count_aEdgecolor(dices: Dice[], color: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.edgeColor === color ) { points += dice.getTopFaceValue(); }
    }
    return points;
  }

  private count_afacecolor_ifeven(dices: Dice[], color: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        if(dice.getTopFaceValue() % 2 === 0){
          points += dice.getTopFaceValue();
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private plus_minus_if_even_odd(dices: Dice[], plusifeven: boolean, color: string, excludecolor: string = 'none'): number {
    const values = [];
    let plus = false;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        if(dice.getTopFaceValue() % 2 === 0 && plusifeven) { plus = true; }
        if(dice.getTopFaceValue() % 2 === 1 && !plusifeven) { plus = true; }
      }
    }

    for(const dice of dices) {
      if(dice.faceColor === color || dice.faceColor === excludecolor ) { continue;}
      values.push(dice.getTopFaceValue());
    }

    if(plus){
      return values[0] + values[1];
    } else {
      return Math.abs(values[0] - values[1]);
    }
  }

  private plus_minus_if_more_less(dices: Dice[], n: number, plusifmore: boolean, color: string, excludecolor: string = 'none'): number {
    const values = [];
    let plus = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        if(dice.getTopFaceValue() > n && plusifmore) { plus = true; }
        if(dice.getTopFaceValue() < n && !plusifmore) { plus = true; }
      }
    }

    for(const dice of dices) {
      if(dice.faceColor === color || dice.faceColor === excludecolor ) { continue;}
      values.push(dice.getTopFaceValue());
    }

    if(plus){
      return values[0] + values[1];
    } else {
      return Math.abs(values[0] - values[1]);
    }
  }

  private plus_minus_index_if_more_less(dices: Dice[], n: number, plusifmore: boolean, color: string, excludecolor: string = 'none'): number {
    let val = 0;
    let plus = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        val = dice.getTopFaceValue();
        if( val > n && plusifmore) { plus = true; }
        if( val < n && !plusifmore) { plus = true; }
      }
    }

    let points = 0;
    for(const dice of dices) {
      if(dice.faceColor === color || dice.faceColor === excludecolor ) { continue;}
      points += dice.getTopFaceValue();
    }

    if(plus){
      return points + val;
    } else {
      return points - val > 0 ? points - val : 0;
    }
  }

  private plus_minus_index_if_even_odd(dices: Dice[], plusifeven: boolean, color: string, excludecolor: string = 'none'): number {
    let val = 0;
    let plus = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        val = dice.getTopFaceValue();
        if( val%2 === 0 && plusifeven) { plus = true; }
        if( val%2 === 1 && !plusifeven) { plus = true; }
      }
    }

    let points = 0;
    for(const dice of dices) {
      if(dice.faceColor === color || dice.faceColor === excludecolor ) { continue;}
      points += dice.getTopFaceValue();
    }

    if(plus){
      return points + val;
    } else {
      return points - val > 0 ? points - val : 0;
    }
  }

  private double_others_ifafacecolor_even(dices: Dice[], color: string): number {
    let points = 0;
    let even = false;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        if(dice.getTopFaceValue() % 2 === 0){
          even = true;
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    if(even){
      return 2*points;
    } else {
      return points;
    }
  }

  private count_if_afacecolor_haspair(dices: Dice[], color: string): number {
    let points = 0;
    const cdice = [];
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
        cdice.push(dice.getTopFaceValue());
      } else {
       points += dice.getTopFaceValue();
      }
    }
    if(cdice.length !== 2 || cdice[0] !== cdice[1]){
      return points;
    } else {
      return points + cdice[0];
    }
  }

  private count_long_ifeven(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.long ) {
        if(dice.getTopFaceValue() % 2 === 0){
          points += dice.getTopFaceValue();
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private count_afacecolor(dices: Dice[], color: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color ) {
      points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private times_top_N(dices: Dice[], n: number, excludecolor: string = 'none'): number {
    let points = 1;
    const values = [];
    if(dices.length < n) { return 0; }
    for( const dice of dices) {
     if(dice.faceColor !== excludecolor) {
       values.push(dice.getTopFaceValue());
     }
    }
    values.sort( (a,b) => b - a );
    for(let i=0; i<n; i++){
      points *=values[i];
    }
    return points;
  }

  private double_long(dices: Dice[]): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.long ) { points += dice.getTopFaceValue(); }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private double_aEdge(dices: Dice[], edge: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.edgeTexture === edge ) {
          points += dice.getTopFaceValue();
        }
      points += dice.getTopFaceValue();
    }
    return points;
  }

  private count_aEdge_ifeven(dices: Dice[], edge: string): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if( dice.edgeTexture === edge ) {
         if( dice.getTopFaceValue() %2 === 0){
          points += dice.getTopFaceValue();
         }
        } else {
          points += dice.getTopFaceValue();
        }
    }
    return points;
  }

  private largest_poker_rule(dices: Dice[], excludecolor: string = 'none', excludelong: boolean = false): number {
    const values = [];
    const repeat = [];
    const maxlist = [];
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
     if(dice.long && excludelong) { continue; }
     if(dice.faceColor !== excludecolor) {
       values.push(dice.getTopFaceValue());
     }
    }
    let r = 1;
    values.sort( (a,b) => b - a );
    for(let k = 0; k < values.length - 1; k++) {
      r = 1;
      for( let m = k+1; m < values.length; m++) {
        if(values[k] === values[m]) { r++; }
      }
      repeat.push(r);
    }

    for (const p of repeat) {
      maxlist.push(p * Math.pow(10, p));
    }

    let max = 0;
    let rtval = 1; 
    for( let i = 0; i < maxlist.length; i++) {
      if( maxlist[i] * repeat[i] > max ){
        max = maxlist[i] * repeat[i];
        rtval = values[i] * repeat[i];
      }
    }
    return rtval;
  }

  private minus_afacecolor(dices: Dice[], color: string, excludecolor: string = 'none'): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor ) { continue; }
      if( dice.faceColor === color ) {
        points -= dice.getTopFaceValue();
       } else {
        points += dice.getTopFaceValue();
       }
    }
    return points > 0 ? points : 0;
  }

  private minus(dices: Dice[], minu: number): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      points += dice.getTopFaceValue();
    }
    return points-minu > 0 ? points-minu : 0;
  }

  private max_number(dices: Dice[], max: number, excludecolor: string = 'none',
                     excludelong: boolean = false, excludesharp: boolean = false, excludedot: string = 'none'): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.long && excludelong) { continue;}
      if(dice.sharp && excludesharp) { continue;}
      if(dice.faceColor === excludecolor) { continue; }
      if(dice.dotColor === excludedot) { continue; }
      points += dice.getTopFaceValue();
    }
    return points > max ? max : points;
  }

  private count_afacecolor_ifmorethan(dices: Dice[], color: string, n: number): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        if(dice.getTopFaceValue() > n) {
          points += dice.getTopFaceValue();
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private count_afacecolor_iflessthan(dices: Dice[], color: string, n: number): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        if(dice.getTopFaceValue() < n) {
          points += dice.getTopFaceValue();
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private count_afacecolor_if_others_moreorless(dices: Dice[], color: string, n: number, morethan: boolean, excludecolor: string = 'none'): number {
    let points = 0;
    let p = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === excludecolor ) { continue; }
      if(dice.faceColor === color ) { p = dice.getTopFaceValue(); continue; }
      points += dice.getTopFaceValue();
    }

    let count = false;
    if(morethan && points > n ) { count = true; }
    if(!morethan && points < n ) { count = true; }

    if(count){
      return points + p;
    }  else {
      return points;
    }
  }

  private count_bigsmall_if_bigsmall(dices: Dice[], color: string, big4big: boolean, excludecolor: string = 'none'): number {
    let points = 0;
    let big = false;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ) {
        if( big4big && dice.getTopFaceValue() > 3) { big = true; }
        if( !big4big && dice.getTopFaceValue() < 4) { big = true; }
      }
    }

    for(const dice of dices) {
      if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
      if(big && dice.getTopFaceValue() > 3) { points += dice.getTopFaceValue(); }
      if(!big && dice.getTopFaceValue() < 4) { points += dice.getTopFaceValue(); }
    }
    return points;
  }

  private add_then_times(dices: Dice[], color1: string, color2: string): number {
    let c1n = 0
    let c2n = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color1 ){
        c1n += dice.getTopFaceValue();
      }
      if(dice.faceColor === color2 ){
        c2n += dice.getTopFaceValue();
      }
    }
    return c1n * c2n;
  }

  private times_if_add_if_oddoreven(dices: Dice[], color: string, timesifeven: boolean, excludecolor: string = 'none'): number {
    let c1n = 1
    let c2n = 0;
    let cind = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        cind += dice.getTopFaceValue();
      }
     }
    let times = false; 
    if(timesifeven && cind % 2 === 0) {
      times = true;
    }
    if(!timesifeven && cind % 2 === 1) {
      times = true;
    }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor) { continue; }
     if(dice.faceColor !== color ){
      if(times){
        c1n *= dice.getTopFaceValue();
      } else {
        c2n += dice.getTopFaceValue();
      }
     }
    }
    return times ? c1n : c2n;
  }

  private times_if_add_if_moreorless(dices: Dice[], N: number, color: string, timesifmore: boolean, excludecolor: string = 'none'): number {
    let c1n = 1
    let c2n = 0;
    let cind = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        cind += dice.getTopFaceValue();
      }
     }
    let times = false; 
    if(timesifmore && cind > N) {
      times = true;
    }
    if(!timesifmore && cind < N) {
      times = true;
    }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor) { continue; }
     if(dice.faceColor !== color ){
      if(times){
        c1n *= dice.getTopFaceValue();
      } else {
        c2n += dice.getTopFaceValue();
      }
     }
    }
    return times ? c1n : c2n;
  }

  private top_timesadd_top_if_lessormore(dices: Dice[], color1: string, color2: string, timesifmore: boolean, N: number,
                                         color: string, excludecolor: string = 'none'): number {
    let c1n = 1
    let c2n = 1;
    let cind = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        cind += dice.getTopFaceValue();
      }
     }
    let times = false; 
    if(timesifmore && cind > N) {
      times = true;
    }
    if(!timesifmore && cind < N) {
      times = true;
    }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
     if(dice.faceColor === color1 && dice.getTopFaceValue() > c1n ){ c1n = dice.getTopFaceValue(); }
     if(dice.faceColor === color2 && dice.getTopFaceValue() > c2n ){ c2n = dice.getTopFaceValue(); }
    }

    if(times){
        return c1n * c2n;
     } else {
       return c1n + c2n;
     }
  }

  private top_plusminus_top_if_moreless(dices: Dice[], color1: string, color2: string, plusifmore: boolean, N: number,
                                        color: string, excludecolor: string = 'none'): number {
  let c1n = 1
  let c2n = 1;
  let cind = 0;
  if(dices.length < 3) { return 0; }
  for( const dice of dices) {
    if(dice.faceColor === color ){
      cind += dice.getTopFaceValue();
    }
  }
  let plus = false; 
  if(plusifmore && cind > N) {
    plus = true;
  }
  if(!plusifmore && cind < N) {
    plus = true;
  }
  for( const dice of dices) {
    if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
    if(dice.faceColor === color1 && dice.getTopFaceValue() > c1n ){ c1n = dice.getTopFaceValue(); }
    if(dice.faceColor === color2 && dice.getTopFaceValue() > c2n ){ c2n = dice.getTopFaceValue(); }
  }

  if(plus){
    return c1n + c2n;
  } else {
    return Math.abs(c1n - c2n);
  }
}

  private top_plusminus_top_if_oddeven(dices: Dice[], color1: string, color2: string, plusifeven: boolean,
                                       color: string, excludecolor: string = 'none'): number {
    let c1n = 1;
    let c2n = 1;
    let odd = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        if(dice.getTopFaceValue()%2 === 1) { odd = true; }
      }
    }
    let plus = false;
    if(plusifeven && !odd) {
      plus = true;
    }
    if(!plusifeven && odd) {
      plus = true;
    }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
      if(dice.faceColor === color1 && dice.getTopFaceValue() > c1n ){ c1n = dice.getTopFaceValue(); }
      if(dice.faceColor === color2 && dice.getTopFaceValue() > c2n ){ c2n = dice.getTopFaceValue(); }
    }

    if(plus){
      return c1n + c2n;
    } else {
      return Math.abs(c1n - c2n);
    }
  }

  private top_timesoradd_top_if_evenorodd(dices: Dice[], color1: string, color2: string, timesifeven: boolean, color: string, excludecolor: string = 'none'): number {
  let c1n = 1
  let c2n = 1;
  let cind = 0;
  if(dices.length < 3) { return 0; }
  for( const dice of dices) {
    if(dice.faceColor === color ){
      cind += dice.getTopFaceValue();
    }
  }
  let times = false; 
  if(timesifeven && cind%2 === 0) {
    times = true;
  }
  if(!timesifeven && cind%2 === 1) {
    times = true;
  }
  for( const dice of dices) {
    if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
    if(dice.faceColor === color1 && dice.getTopFaceValue() > c1n ){ c1n = dice.getTopFaceValue(); }
    if(dice.faceColor === color2 && dice.getTopFaceValue() > c2n ){ c2n = dice.getTopFaceValue(); }
  }

  if(times){
    return c1n * c2n;
  } else {
    return c1n + c2n;
  }
}

private top2_timesoradd_if_evenorodd(dices: Dice[], timesifeven: boolean, color: string,  excludecolor: string = 'none'): number {
  let values = [];
  let cind = 0;
  if(dices.length < 3) { return 0; }
  for( const dice of dices) {
    if(dice.faceColor === color ){
      cind += dice.getTopFaceValue();
    }
  }
  let times = false;
  if(timesifeven && cind%2 === 0) {
    times = true;
  }
  if(!timesifeven && cind%2 === 1) {
    times = true;
  }
  for( const dice of dices) {
    if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
    values.push(dice.getTopFaceValue());
  }
  values.sort( (a,b) => b - a );
  if(times){
    return values[0] * values[1];
  } else {
    return values[0] + values[1];
  }
}

private top2_timesoradd_if_moreorless(dices: Dice[], N: number, timesifmore: boolean, color: string,  excludecolor: string = 'none'): number {
  let values = [];
  let cind = 0;
  if(dices.length < 3) { return 0; }
  for( const dice of dices) {
    if(dice.faceColor === color ){
      cind += dice.getTopFaceValue();
    }
  }
  let times = false;
  if(timesifmore && cind > N) {
    times = true;
  }
  if(!timesifmore && cind < N) {
    times = true;
  }
  for( const dice of dices) {
    if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
    values.push(dice.getTopFaceValue());
  }
  values.sort( (a,b) => b - a );
  if(times){
    return values[0] * values[1];
  } else {
    return values[0] + values[1];
  }
}

  private count_pairs_of_facecolor(dices: Dice[], color1: string, color2: string){
    let points = 0;
    const c1dice = [];
    const c2dice = [];
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color1 ) {
        c1dice.push(dice.getTopFaceValue());
      }
      if( dice.faceColor === color2 ) {
        c2dice.push(dice.getTopFaceValue());
      }
    }
    if(c1dice.length === 2 && c1dice[0] === c1dice[1]){
      points += 2*c1dice[0];
    }
    if(c2dice.length === 2 && c2dice[0] === c2dice[1]){
      points += 2*c2dice[0];
    }
    return points;
  }

  private count_number_of_pairs(dices: Dice[], color1: string, color2: string, color3: string = 'none'){
    let points = 0;
    const c1dice = [];
    const c2dice = [];
    const c3dice = [];
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color1 ) {
        c1dice.push(dice.getTopFaceValue());
      }
      if( dice.faceColor === color2 ) {
        c2dice.push(dice.getTopFaceValue());
      }
      if( dice.faceColor === color3 ) {
        c3dice.push(dice.getTopFaceValue());
      }
    }
    if(c1dice.length === 2 && c1dice[0] === c1dice[1]){
      points += 1;
    }
    if(c2dice.length === 2 && c2dice[0] === c2dice[1]){
      points += 1;
    }
    if(c3dice.length === 2 && c3dice[0] === c3dice[1]){
      points += 1;
    }
    return points;
  }

  private times_then_add(dices: Dice[], color1: string, color2: string,  color3: string, color4: string){
    let v1 = 1;
    let v2 = 1;
    let v3 = 1;
    let v4 = 1;
    if(dices.length < 4) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color1 ) {
        v1 = dice.getTopFaceValue();
      }
      if( dice.faceColor === color2 ) {
        v2 = dice.getTopFaceValue();
      }
      if( dice.faceColor === color3 ) {
        v3 = dice.getTopFaceValue();
      }
      if( dice.faceColor === color4 ) {
        v4 = dice.getTopFaceValue();
      }
    }
    return v1*v2 + v3*v4;
  }

  private times_then_add_ifpair(dices: Dice[], color1: string, color2: string){
    let v1 = [];
    let v2 = [];
    let points = 0;
    if(dices.length < 4) { return 0; }
    for( const dice of dices) {
      if( dice.faceColor === color1 ) {
        v1.push(dice.getTopFaceValue());
      }
      if( dice.faceColor === color2 ) {
        v2.push(dice.getTopFaceValue());
      }
    }
    if(v1.length === 2) {
      points += v1[0] * v1[1];
    }
    if(v2.length === 2) {
      points += v2[0] * v2[1];
    }
    return points;
  }

  private times_add_of_larger(dices: Dice[], color1: string, color2: string, times: boolean, excludecolor: string = 'none'){
    let lv1 = 1;
    let lv2 = 1;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      if( dice.faceColor === color1 ) {
        if(dice.getTopFaceValue() > lv1) { lv1 = dice.getTopFaceValue(); }
      }
      if( dice.faceColor === color2 ) {
        if(dice.getTopFaceValue() > lv2) { lv2 = dice.getTopFaceValue(); }
      }
    }
    if(times) {
      return lv1 * lv2;
    } else {
      return lv1 + lv2;
    }
  }

  private nullface_plus_minus_zero(dices: Dice[], n: number, excludecolor: string = 'none' ): number {
    let points = 0;
    let p = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      p = dice.getTopFaceValue();
      if( p === 0 ){
        if(n === 0){
          return 0;
        } else {
          points += n;
        }
       } else {
        points += p;
      }
     }
    return points > 0 ? points : 0;
  }

  private nullface_max(dices: Dice[], max: number, excludecolor: string = 'none' ): number {
    let points = 0;
    let nullface = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      points += dice.getTopFaceValue();
      if(dice.getTopFaceValue() === 0) { nullface = true; }
     }
    if(nullface){
      return points > max ? max : points;
    } else {
      return points;
    }
  }

  private nullface_as_maxmin(dices: Dice[], color: string, asmax: boolean, excludecolor: string = 'none' ): number {
    let max = 1;
    let min = 6;
    let nullface = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color){
        if(asmax && dice.getTopFaceValue() > max) { max = dice.getTopFaceValue(); }
        if(!asmax && dice.getTopFaceValue() < min) { min = dice.getTopFaceValue(); }
      }
    }

    let points = 0;
    for(const dice of dices){
      if(dice.faceColor === excludecolor) { continue; }
      if(dice.getTopFaceValue() === 0){
        if(asmax){
          points += max;
        } else {
          points += min;
        }
      } else {
        points += dice.getTopFaceValue();
      }
    }
    return points;
  }

  private mix_double_or_add_extra(dices: Dice[], double: boolean, n: number = 0, excludecolor: string = 'none' ): number {
    let points = 0;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue;}
      if(dice.dotColor === 'mix' && dice.getTopFaceValue() > 1) {
        points += double ? dice.getTopFaceValue() : n;
      }
      points += dice.getTopFaceValue();
     }
    return points;
  }

  private count_oddsevens_if_oddeven(dices: Dice[], color: string, even2even: boolean, excludecolor: string = 'none'): number {
    let points = 0;
    let counteven = false;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        if( dice.getTopFaceValue() % 2 === 0 && even2even) { counteven = true; }
        if( dice.getTopFaceValue() % 2 === 1 && !even2even) { counteven = true; }
      }
     }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor) { continue; }
     if(counteven && dice.getTopFaceValue()%2 === 0){
      points += dice.getTopFaceValue();
     }
     if(!counteven && dice.getTopFaceValue()%2 === 1){
      points += dice.getTopFaceValue();
     }
    }
    return points;
  }

  private count_oddsevens_if_longoddeven(dices: Dice[], ignorelong: boolean, doublelong: boolean, excludecolor: string = 'none'): number {
    let points = 0;
    let counteven = false;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.long ){
        if( dice.getTopFaceValue() % 2 === 0 ) { counteven = true; break; }
      }
     }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor) { continue; }
     if(dice.long && ignorelong) { continue; }
     if(dice.long && doublelong) { points += dice.getTopFaceValue(); }
     if(counteven && dice.getTopFaceValue()%2 === 0){
      points += dice.getTopFaceValue();
     }
     if(!counteven && dice.getTopFaceValue()%2 === 1){
      points += dice.getTopFaceValue();
     }
    }
    return points;
  }

  private count_oddsevens_if_moreless(dices: Dice[], N: number, evenifmore: boolean, color: string, excludecolor: string = 'none',
                                      excludeirregularshape: boolean = false ): number {
    let points = 0;
    let counteven = false;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        if( dice.getTopFaceValue() > N && evenifmore ) { counteven = true; break; }
        if( dice.getTopFaceValue() < N && !evenifmore ) { counteven = true; break; }
      }
     }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
     if(dice.long && excludeirregularshape ) { continue; }
     if(dice.sharp && excludeirregularshape ) { continue; }
     if(counteven && dice.getTopFaceValue() % 2 === 0) {
      points += dice.getTopFaceValue();
     }
     if(!counteven && dice.getTopFaceValue() % 2 === 1) {
      points += dice.getTopFaceValue();
     }
    }
    return points;
  }

  private count_if_lessormore_than_long(dices: Dice[], morethan: boolean,  ignorelong: boolean, excludecolor: string = 'none'): number {
    let points = 0;
    let long = 1;
    if(dices.length < 2) { return 0; }
    for( const dice of dices) {
      if(dice.long ){
        long = dice.getTopFaceValue();
      }
    }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue; }
      if(dice.long && ignorelong) { continue; }
      if(morethan && dice.getTopFaceValue() >= long){
        points += dice.getTopFaceValue();
      }
      if(!morethan && dice.getTopFaceValue() <= long){
        points += dice.getTopFaceValue();
      }
    }
    return points;
}

private count_if_moreless_than_index(dices: Dice[], morethan: boolean, color: string, excludecolor: string = 'none'): number {
  let points = 0;
  let index = 1;
  if(dices.length < 2) { return 0; }
  for( const dice of dices) {
    if(dice.faceColor === color ){
      index = dice.getTopFaceValue();
    }
  }
  for( const dice of dices) {
    if(dice.faceColor === excludecolor || dice.faceColor === color) { continue; }
    if(morethan && dice.getTopFaceValue() > index){
      points += dice.getTopFaceValue();
    }
    if(!morethan && dice.getTopFaceValue() < index){
      points += dice.getTopFaceValue();
    }
  }
  return points;
}

  private count_number_of_compareto(dices: Dice[], color: string, lessthan: boolean, excludecolor: string = 'none'): number {
    let value = 0;
    let N = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === color ){
        value = dice.getTopFaceValue();
      }
     }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor || dice.faceColor === color ) { continue; }
     if(lessthan && dice.getTopFaceValue() < value){
      N++;
     }
     if(!lessthan && dice.getTopFaceValue() > value){
      N++;
     }
    }
    return N;
  }

  private count_number_of_compareto_long(dices: Dice[], lessthan: boolean, excludecolor: string = 'none'): number {
    let value = 0;
    let N = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
      if(dice.long ){
        value = dice.getTopFaceValue();
        break;
      }
     }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor || dice.long ) { continue; }
     if(lessthan && dice.getTopFaceValue() < value){
      N++;
     }
     if(!lessthan && dice.getTopFaceValue() > value){
      N++;
     }
    }
    return N;
  }

  private count_number_of_oddsevens(dices: Dice[], counteven: boolean, excludecolor: string = 'none'): number {
    let N = 0;
    if(dices.length < 3) { return 0; }
    for( const dice of dices) {
     if(dice.faceColor === excludecolor ) { continue; }
     if(counteven && dice.getTopFaceValue()%2 === 0){
      N++;
     }
     if(!counteven && dice.getTopFaceValue()%2 === 1){
      N++;
     }
    }
    return N;
  }

  private round_multiple_N(dices: Dice[], N: number, excludecolor: string = 'none' ): number {
    let points = 0;
    if(dices.length < 1) { return 0; }
    for( const dice of dices) {
      if(dice.faceColor === excludecolor) { continue;}
      points += dice.getTopFaceValue();
    }
    const r = points%N;
    return r >= N/2 ? points + N - r : points - r;
  }

  private randN(min: number, max: number) {
    return Math.floor(Math.random()*(max-min+1)) + min;
  }

  private randSign(): number {
    if(Math.random() > 0.5) {
      return 1;
    } else {
      return -1;
    }
  }
}
