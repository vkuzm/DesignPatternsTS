import RobotPlan from "./RobotPlan";

class Robot implements RobotPlan {
    private robotHead: string;
    private robotArms: string;
    private robotLegs: string;
    private robotTorso: string;

    setRobotHead(head: string): void {
        this.robotHead = head;
    }

    setRobotTorso(torso: string): void {
        this.robotTorso = torso;
    }

    setRobotArms(arms: string): void {
        this.robotArms = arms;
    }

    setRobotLegs(legs: string): void {
        this.robotLegs = legs;
    }

    getRobotHead(): string {
        return this.robotHead;
    }

    getRobotTorso(): string {
        return this.robotTorso;
    }

    getRobotArms(): string {
        return this.robotArms;
    }

    getRobotLegs(): string {
        return this.robotLegs;
    }
}

export default Robot;