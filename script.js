/*You are counting points for a football game, given the
amount of touchdowns, after points, and field goals find the
final points for the team and return that value*/

function final_score(touchdowns, after_points, two_point_con, field_goals){
    var touchdowns = touchdowns * 6
    var after_points = after_points
    var two_point_con = two_point_con * 2
    var field_goals = field_goals * 3
    var total_points = touchdowns + after_points + two_point_con + field_goals
    return total_points
}

console.log(final_score(1,1,1,1,))